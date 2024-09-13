"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import menu from "@/data/menus/index.json";

import NavDropdown from "./Dropdown";

interface Props {
  isDark: boolean;
  isNavbarMobileVisible: boolean;
}

type menu = {
  data: { path: string; label: string }[];
};

const dropdownItem = {
  item: [
    {
      title: "Acara",
      date: "2022-12-31",
      path: "/event",
    },
    {
      title: "Kegiatan",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      path: "/activity",
    },
  ],
};

export default function Navbar(props: Props) {
  const pathname = usePathname();

  const renderItem = (menu: menu) => {
    return menu.data.map((menu, index) => {
      return (
        <li
          key={index}
          className={`${pathname === menu.path ? "active" : ""} relative nav-li-${props.isDark ? "light" : "dark"}`}
        >
          {menu.label === "Acara" ? (
            <div>
              <NavDropdown item={dropdownItem.item} />
            </div>
          ) : (
            <Link href={menu.path} className="">
              <p>{menu.label}</p>
            </Link>
          )}
        </li>
      );
    });
  };

  return (
    <>
      <nav role="navigation" className="nav md:block hidden">
        <ul className="flex items-center">{renderItem(menu)}</ul>
      </nav>
      <nav
        className={`nav-mobile md:hidden ${props.isNavbarMobileVisible ? "show" : ""}`}
      >
        <ul className="px-10 w-full flex flex-col max-h-[500px] overflow-auto">
          {renderItem(menu)}
        </ul>
      </nav>
    </>
  );
}
