import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import menus from "@/data/menus/index.json";

export default function Footer() {
  return (
    <footer className="footer p-10 page__container bg-base-black text-white">
      <div className="flex justify-between sm:flex-row flex-col">
        <div>
          <Image
            src="/logo/logo-white.svg"
            alt="Site Logo"
            width={200}
            height={200}
            loading="lazy"
          />
          <p className="text-headline-4">Ideas Change Everything</p>
          <div className="button-group flex items-center mt-5 gap-5">
            <button className="btn btn-type-default btn-circle">
              <FaInstagram size={25} />
            </button>
            <button className="btn btn-type-default btn-circle">
              <FaTiktok size={25} />
            </button>
            <button className="btn btn-type-default btn-circle">
              <IoIosMail size={25} />
            </button>
          </div>
        </div>
        <div>
          <ul className="sm:mt-0 mt-10">
            {menus.data.map((menu) => (
              <li
                className="mb-5 text-white hover:text-red-500"
                key={menu.label}
              >
                <Link href={menu.path}>{menu.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mt-10">
        <p className="footer-text font-plus-jakarta-sans text-center">
          Copyright © 2024, 2024 TEDxBandung | This independent TEDx event is
          operated under license from TED
        </p>
      </div>
    </footer>
  );
}
