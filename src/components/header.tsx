"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <Link href="/" className="text-xl font-bold">TaskGenAI</Link>
      {user ? (
        <UserButton afterSignOutUrl="/auth/sign-in" />
      ) : (
        <Link href="/auth/sign-in" className="text-blue-500">Login</Link>
      )}
    </div>
  );
}
