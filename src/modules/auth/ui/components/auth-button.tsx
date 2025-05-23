"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
  return (
    // TODO: add sign in functionality  and states
    <>
      <SignedIn>
        <UserButton />
        {/* add menu items like studio and profile */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/2 rounded-full shadow-none"
            variant={"outline"}
          >
            <UserCircleIcon />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
