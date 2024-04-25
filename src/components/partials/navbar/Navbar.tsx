"use client"

import Link from "next/link";
import menu from "@/data/menus/index.json";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()
    return (
        <nav role="navigation" className="nav">
            <ul className="flex gap-5 justify-between">
                {
                    menu.data.map((menu, index) => (
                        <li key={index}>
                            <Link href={menu.path} className={`nav-link ${pathname === menu.path ? "active" : ""}`}>
                                {menu.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
