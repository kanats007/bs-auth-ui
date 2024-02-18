"use client";
import { register } from "@/api/auth";
import Link from "next/link";
import React, { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    register({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    });
  };
  return (
    <div>
      <h1>SignUp Page</h1>
      <form onSubmit={submitForm}>
        {/* Name */}
        <div>
          <label htmlFor="name">Name</label>

          <input
            id="name"
            type="text"
            value={name}
            className="block mt-1 w-full"
            onChange={(event) => setName(event.target.value)}
            required
            autoFocus
          />
        </div>

        {/* Email Address */}
        <div className="mt-4">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            value={email}
            className="block mt-1 w-full"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            value={password}
            className="block mt-1 w-full"
            onChange={(event) => setPassword(event.target.value)}
            required
            autoComplete="new-password"
          />
        </div>

        {/* Confirm Password */}
        <div className="mt-4">
          <label htmlFor="passwordConfirmation">Confirm Password</label>

          <input
            id="passwordConfirmation"
            type="password"
            value={passwordConfirmation}
            className="block mt-1 w-full"
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            required
          />
        </div>

        <div className="flex items-center justify-end mt-4">
          <Link
            href="/login"
            className="underline text-sm text-gray-600 hover:text-gray-900"
          >
            Already registered?
          </Link>

          <button className="ml-4">Register</button>
        </div>
      </form>
    </div>
  );
}
