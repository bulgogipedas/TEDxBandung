"use client";
import Image from "next/image";
import Link from "next/link";

import Navbar from "./Navbar";

interface Props {
  isDark: boolean;
}

export default function Header(props: Props) {
  return (
    <header
      className={`header font-space-grotesk ${props.isDark ? "" : "header-light"}`}
    >
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="block">
          <Image
            src={props.isDark ? "/logo/logo-white.svg" : "/logo/logo-black.svg"}
            alt="Site Logo"
            width={200}
            height={200}
            loading="lazy"
          />
        </Link>
        <Navbar isDark={props.isDark} />
      </div>
    </header>
  );
}
