"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">//Anchor tag for home page
        <Image src="./logo.png"></Image>
        </Link>
      </nav>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
    </header>
   
  );
};

export default Header;
