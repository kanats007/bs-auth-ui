"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const TransitionButton = ({
  label,
  url,
}: {
  label: string;
  url: string;
}) => {
  const router = useRouter();
  const toWorkResult = () => {
    router.push(url);
  };
  return <button onClick={toWorkResult}>{label}</button>;
};
