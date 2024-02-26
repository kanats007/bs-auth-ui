"use client";
import { getUser } from "@/api/auth";
import React, { useEffect, useState } from "react";

export const TopContents = () => {
  const [user, SetUser] = useState<any>(null);
  useEffect(() => {
    getUser().then((data) => SetUser(data.data));
  }, []);
  return user !== null ? (
    <div>
      <div>名前: {user.name}</div>
      <div>email: {user.email}</div>
    </div>
  ) : (
    <>loading...</>
  );
};
