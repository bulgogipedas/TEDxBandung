import Image from "next/image";
import Link from "next/link";
// icons
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="header font-plus-jakarta-sans">
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
        <Navbar />
        <div className="space-x-5 flex items-center">
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
      </div>
    </header>
  );
}
