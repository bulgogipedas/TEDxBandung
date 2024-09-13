"use client";
import Link from "next/link";

import { Accordion } from "@/components/accordion";

export default function Page() {
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
        <div className="my-3">
          <Accordion
            buttonClassname="text-heading btn"
            title="4. Data Fetching"
          >
            <Link href="/example/pokemon/csr" className="btn">
              <h2 className="text-subtitle">4.1. CSR</h2>
            </Link>
            <Accordion buttonClassname="text-heading btn" title="4.2. SSR">
              <Link href="/example/pokemon/ssr/parallel" className="btn">
                <h2 className="text-subtitle">4.2.1. Parallel</h2>
              </Link>
              <Link href="/example/pokemon/ssr/sequential" className="btn">
                <h2 className="text-subtitle">4.2.2. Sequential</h2>
              </Link>
            </Accordion>
          </Accordion>
        </div>
        <Link href="/example/debounce" className="btn hover:opacity-60">
          <h2 className="text-subtitle">5. Debounce</h2>
        </Link>
      </div>
    </section>
  );
}
