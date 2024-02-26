"use client";
import { forgotPassword } from "@/api/auth";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    forgotPassword({ email });
  };
  return (
    <>
      <h1>ForgotPassword</h1>
      <div>
        <form onSubmit={submitForm}>
          {/* Email Address */}
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              className="block mt-1 w-full"
              onChange={(event) => setEmail(event.target.value)}
              required
              autoFocus
            />
          </div>

          <div className="flex items-center justify-end mt-4">
            <button>Email Password Reset Link</button>
          </div>
        </form>
      </div>
      <div>{email}</div>
      <div>
        <Link href="/login">login</Link>
      </div>
    </>
  );
}
