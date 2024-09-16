"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import Navbar from "./Navbar";

export default function Header() {
  const [isNavbarMobileVisible, setIsNavbarMobileVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbarMobileVisible = () => {
    if (isNavbarMobileVisible) {
      setIsNavbarMobileVisible(false);
      return;
    }
    setIsNavbarMobileVisible(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  return (
    <header
      className={`header font-space-grotesk ${!scrolled ? "" : "header-light"}`}
    >
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="block">
          <Image
            src={!scrolled ? "/logo/logo-white.svg" : "/logo/logo-black.svg"}
            alt="Site Logo"
            width={200}
            height={200}
            loading="lazy"
          />
        </Link>
        <Navbar
          isDark={!scrolled}
          isNavbarMobileVisible={isNavbarMobileVisible}
        />
        <button
          onClick={toggleNavbarMobileVisible}
          className="absolute top-6 right-12 md:hidden"
        >
          <GiHamburgerMenu
            size={25}
            className={`${isNavbarMobileVisible ? "text-red-600" : !scrolled ? "text-white" : ""}`}
          />
        </button>
      </div>
    </header>
  );
}
