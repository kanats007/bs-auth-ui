import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const res = await auth();
  // console.log(res);
  // const data = await res.json();
  // console.log(data);
  console.log("execute on server");
  if (res.status !== 200) redirect("/login");
  return <>{children}</>;
}
const auth = async () => {
  const cookie = getAllCookies();
  const XSRFToken = getXSRFToken();
  return await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`, {
    headers: {
      cookie,
      "x-xsrf-token": XSRFToken ?? "",
      // laravel sanctumで認証保護されたAPIにアクセスする場合は必ず必要となる
      referer: process.env.NEXT_PUBLIC_FRONTEND_URL ?? "",
      // さらに、必ずリクエストへAccept: application/jsonヘッダを付け、送信してください。
      Accept: "application/json",
    },
    cache: "no-store",
    credentials: "include",
  }).catch((error) => {
    throw error;
  });
};

/**
 * @see https://zenn.dev/ikefukurou777/articles/0a7aa831baac0a
 * @returns
 */
const getAllCookies = (): string => {
  const cookieStore = cookies();
  //   console.log(cookieStore.getAll());
  // サーバーコンポーネントからAPIコールする際、そのままだとcookieが設定されないため
  const cookie = cookieStore
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join(";");
  return cookie;
};

/**
 * csrf-tokenを取得する
 * @returns
 */
const getXSRFToken = () => {
  const cookie = cookies().get("XSRF-TOKEN");
  return cookie?.value;
};
