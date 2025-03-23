"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();

  return (
    <nav className="py-6 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Mind<span className="text-blue-500">Stream</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6 mt-2">
          <Link
            className="text-lg font-medium hover:text-blue-500 transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-lg font-medium hover:text-blue-500 transition-colors"
            href="/dashboard"
          >
            My Blogs
          </Link>
        </div>
      </div>
      {user ? (
        <div className="flex items-center gap-4">
          <p>{user.given_name}</p>
          <LogoutLink className={buttonVariants({ variant: "secondary" })}>
            Logout
          </LogoutLink>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <LoginLink className={buttonVariants()}>Login</LoginLink>
          <RegisterLink className={buttonVariants({ variant: "secondary" })}>
            Sign up
          </RegisterLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
