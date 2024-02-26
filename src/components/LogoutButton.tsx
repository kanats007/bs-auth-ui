"use client";
import { logout } from "@/api/auth";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export const LogoutButton = (props: Props) => {
  const router = useRouter();
  const signout = async () => {
    const res = await logout();
    router.push("/login");
  };
  return <button onClick={signout}>Log out</button>;
};
