import Link from "next/link";
import menu from "@/data/menus/index.json";

export default function Navbar() {
    return (
        <nav role="navigation" className="nav">
            <ul className="flex gap-5 justify-between">
                {
                    menu.data.map((menu, index) => (
                        <li key={index}>
                            <Link href={menu.path} className="nav-link">
                                {menu.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
