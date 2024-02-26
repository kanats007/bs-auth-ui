"use client";
import { getUser } from "@/api/auth";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getUser()
      .then((data) => {
        if (data.status !== 200) {
          setUser(null);
          router.push("/login");
        }
        setUser(data);
      })
      .catch(() => {
        setUser(null);
        router.push("/login");
      });
  }, [pathname]);
  return user !== null ? <>{children}</> : <div>loading...</div>;
};
