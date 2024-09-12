"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import menu from "@/data/menus/index.json";

interface Props {
  isDark: boolean;
}

export default function Navbar(props: Props) {
  const pathname = usePathname();
  return (
    <nav role="navigation" className="nav">
      <ul className="flex items-center">
        {menu.data.map((menu, index) => (
          <li
            key={index}
            className={`${pathname === menu.path ? "active" : ""} nav-li-${props.isDark ? "light" : "dark"}`}
          >
            <Link href={menu.path} className="">
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
