import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

import { RegisterForm } from "@/components/example";

export default function FormValidation() {
  return (
    <section className="page__container">
      <Link href="/example" className="flex items-center gap-5 mt-10">
        <FaArrowLeft size={30} />
        <h1 className="text-title">Form validation</h1>
      </Link>
      <div className="grid place-items-start mt-10">
        <RegisterForm />
      </div>
    </section>
  );
}
