"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Page() {
  const [dropdownState, setDropdownState] = useState({
    main: false,
    nested1: false,
  });

  // Function to toggle the dropdown state dynamically
  const toggleDropdown = (key: string) => {
    setDropdownState((prevState: any) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <section className="page__container">
      <h1 className="text-title mt-10">Example</h1>
      <p className="text-paragraph">
        Welcome to the Component Examples page. Here, you&apos;ll find practical
        implementations of various UI elements, including typography, buttons,
        form validation, and few fetching strategies.
      </p>
      <div className="mt-5 example">
        <Link href="/example/typography" className="btn hover:opacity-60">
          <h2 className="text-subtitle">1. Typography</h2>
        </Link>
        <Link href="/example/button" className="btn hover:opacity-60">
          <h2 className="text-subtitle">2. Button</h2>
        </Link>
        <Link href="/example/form-validation" className="btn hover:opacity-60">
          <h2 className="text-subtitle">3. Form validation</h2>
        </Link>
        <div className="btn hover:opacity-60 example-dropdown">
          <ul>
            <button
              className="text-subtitle flex items-center gap-2"
              onClick={() => toggleDropdown("main")}
            >
              4. Fetching Pokemon{" "}
              <FaChevronDown
                className={`${dropdownState?.main && "rotate-180"} mt-1`}
                size={25}
              />
            </button>
            <ul
              className={`example-dropdown__menu ${dropdownState?.main && "show"}`}
            >
              <li className="example-dropdown__item mt-5">
                <Link href="/example/pokemon/csr">
                  <h2 className="text-subtitle">4.1. CSR</h2>
                </Link>
                <ul className="mt-5">
                  <button
                    className="text-subtitle flex items-center gap-2"
                    onClick={() => toggleDropdown("nested1")}
                  >
                    4.2. SSR
                    <FaChevronDown
                      className={`${dropdownState?.nested1 && "rotate-180"} mt-1`}
                      size={25}
                    />
                  </button>
                  <ul
                    className={`example-dropdown__menu ${dropdownState?.nested1 && "show"}`}
                  >
                    <li className="example-dropdown__item mt-5">
                      <Link href="/example/pokemon/ssr/parallel">
                        <h2 className="text-subtitle">4.2.1. Parallel</h2>
                      </Link>
                    </li>
                    <li className="example-dropdown__item mt-5">
                      <Link href="/example/pokemon/ssr/sequential">
                        <h2 className="text-subtitle">4.2.2. Sequential</h2>
                      </Link>
                    </li>
                  </ul>
                </ul>
              </li>
            </ul>
          </ul>
        </div>
        <Link href="/example/debounce" className="btn hover:opacity-60">
          <h2 className="text-subtitle">5. Debounce</h2>
        </Link>
      </div>
    </section>
  );
}
