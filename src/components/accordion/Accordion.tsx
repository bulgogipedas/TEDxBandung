"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  title: string;
  children: React.ReactNode;
  buttonClassname?: string;
}
export default function Accordion(props: Props) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

  return (
    <>
      <button
        className={`flex items-center gap-2 ${props.buttonClassname}`}
        onClick={toggleDropdown}
      >
        <p>{props.title}</p>
        <FaChevronDown
          size={10}
          className={`${openDropdown && "rotate-180"}`}
        />
      </button>
      <ul className={`example-dropdown__menu ${openDropdown && "show"}`}>
        <li className="example-dropdown__item hover:brightness-75">
          {props.children}
        </li>
      </ul>
    </>
  );
}
