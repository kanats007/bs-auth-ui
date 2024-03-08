"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const TransitionButton = ({ url }: { url: string }) => {
  const router = useRouter();
  const toWorkResult = () => {
    router.push(url);
  };
  return <button onClick={toWorkResult}>作業実績ボタンへ</button>;
};
