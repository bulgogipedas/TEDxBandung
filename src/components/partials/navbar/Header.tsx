"use client"

import { useState } from "react";

import Link from "next/link";
import Navbar from "./Navbar";
import Image from "next/image";

// icons
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { IoIosMail, IoMdMenu } from "react-icons/io";

export default function Header() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    return (
        <header className="header z-40 font-plus-jakarta-sans">
            <div className="flex items-center justify-between w-full">
                <Link href="/">
                    <Image
                        src="/logo/logo-white.svg"
                        alt="Site Logo"
                        width={200}
                        height={200}
                        loading="lazy"
                    />
                </Link>
                <Navbar setIsNavbarOpen={setIsNavbarOpen} />
                <div className="space-x-1 items-center lg:space-x-5 md:flex hidden">
                    <button className="btn btn-base-white">
                        <Link href="/auth/login">
                            <FaInstagram size={20} />
                        </Link>
                    </button>
                    <button className="btn btn-base-white">
                        <Link href="/auth/login">
                            <FaTiktok size={20} />
                        </Link>
                    </button>
                    <button className="btn btn-base-white">
                        <Link href="mailto:test@example.com">
                            <IoIosMail size={20} />
                        </Link>
                    </button>
                </div>
                <div className="md:hidden block">
                    <button onClick={() => setIsNavbarOpen(!isNavbarOpen)} className="btn btn-base-white">
                        <IoMdMenu size={20} />
                    </button>
                </div>
            </div>
        </header>
    )
}
