"use client";
import axios from "@/lib/axios";
import React from "react";

const auth = async () => {
  axios
    .get("/api/user")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      throw error;
    });
};

export const AuthButton = () => {
  const checkAuth = async () => {
    await auth();
  };
  return <button onClick={checkAuth}>click</button>;
};
