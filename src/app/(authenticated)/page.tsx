import React from "react";
import Link from "next/link";
import { LogoutButton } from "@/components/LogoutButton";
import { TopContents } from "@/components/TopContents";

export default async function Logined() {
  return (
    <>
      <h1>Top Page</h1>
      <TopContents />
      <div>
        <Link href="/work-result">to work result</Link>
      </div>
      <LogoutButton />
    </>
  );
}
