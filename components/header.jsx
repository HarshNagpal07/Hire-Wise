"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
         <Link href="/"> {/*Anchor tag for home page */}
        <Image src="/logo.png" alt="Hire Wise Logo" width={200} height={60}/>
        </Link>
      </nav>
      
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton/>
        </SignedIn>
      
    </header>
   
  );
};

export default Header;
