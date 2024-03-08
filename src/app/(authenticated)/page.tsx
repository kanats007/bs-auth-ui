import { LogoutButton } from "@/components/LogoutButton";
import { TransitionButton } from "@/components/TransitionButton";
import React from "react";

export default async function Logined() {
  return (
    <div>
      <h1>Logined Page</h1>
      <TransitionButton label="作業実績ページへ" url="/work-result" />
      <LogoutButton />
    </div>
  );
}
