"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import Navbar from "./Navbar";

interface Props {
  isDark: boolean;
}

export default function Header(props: Props) {
  const [isNavbarMobileVisible, setIsNavbarMobileVisible] = useState(false);

  const toggleNavbarMobileVisible = () => {
    if (isNavbarMobileVisible) {
      setIsNavbarMobileVisible(false);
      return;
    }
    setIsNavbarMobileVisible(true);
  };

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
        <Navbar
          isDark={props.isDark}
          isNavbarMobileVisible={isNavbarMobileVisible}
        />
        <button
          onClick={toggleNavbarMobileVisible}
          className="absolute top-6 right-12 md:hidden"
        >
          <GiHamburgerMenu
            size={25}
            className={`${isNavbarMobileVisible ? "text-red-600" : ""}`}
          />
        </button>
      </div>
    </header>
  );
}
