import { TransitionButton } from "@/components/TransitionButton";
import Link from "next/link";
import React from "react";

export default async function Logined() {
  return (
    <div>
      <h1>作業実績ページ</h1>
      <TransitionButton label="トップページへ" url="/" />
    </div>
  );
}
