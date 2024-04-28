"use client"

import Link from "next/link";
import menu from "@/data/menus/index.json";
import { usePathname } from "next/navigation";

interface Props {
    setIsNavbarOpen: (val: boolean) => void
}
export default function Navbar(props: Props) {
    const pathname = usePathname()
    return (
        <>
            <nav role="navigation" className="nav nav-base-white-rounded hidden lg:block">
                <ul className="flex items-center">
                    {
                        menu.data.map((menu, index) => (
                            <li key={index} className={`${pathname === menu.path ? "active" : ""}`}>
                                <Link href={menu.path} className="nav-link">
                                    {menu.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}
