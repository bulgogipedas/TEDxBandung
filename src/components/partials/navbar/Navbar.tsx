"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import menu from "@/data/menus/index.json";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav role="navigation" className="nav nav-base-white-rounded">
      <ul className="flex items-center">
        {menu.data.map((menu, index) => (
          <li
            key={index}
            className={`${pathname === menu.path ? "active" : ""}`}
          >
            <Link href={menu.path} className="nav-link">
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
