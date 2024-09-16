import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

export default function Page() {
  return (
    <section className="page__container">
      <Link href="/example" className="flex items-center gap-5 mt-20">
        <FaArrowLeft size={30} />
        <h1 className="text-title">Button</h1>
      </Link>
      <div className="grid place-items-start mt-10">
        <h1 className="text-2xl mb-5">Button Default</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <button className="btn btn-type-default btn-red">
            .btn .btn-type-default .btn-red
          </button>
          <button className="btn btn-type-default btn-black">
            .btn .btn-type-default .btn-black
          </button>
          <button className="btn btn-type-default btn-red">
            <FaInstagram size={25} /> default button with icon
          </button>
          <button className="btn btn-type-default btn-black">
            <FaTiktok size={20} /> default button with icon
          </button>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl mb-5">Button Text</h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <button className="btn btn-type-text btn-text-black">
              .btn .btn-type-text .btn-text-black
            </button>
            <button className="btn btn-type-text btn-text-white">
              .btn .btn-type-text .btn-text-white
            </button>
            <button className="btn btn-type-text btn-text-black">
              <FaInstagram size={25} /> text button with icon
            </button>
            <button className="btn btn-type-text btn-text-white">
              <FaTiktok size={20} /> text button with icon
            </button>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl mb-5">Button Size</h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            <button className="btn btn-type-default btn-black btn-size-small">
              <FaInstagram size={25} /> small button
            </button>
            <button className="btn btn-type-default btn-black btn-size-medium">
              <FaTiktok size={20} /> medium button
            </button>
            <button className="btn btn-type-default btn-black btn-size-default">
              <FaTiktok size={20} /> default button
            </button>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl mb-5">Button State</h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            <button
              data-loading="true"
              className="btn btn-type-default btn-red btn-size-default"
            >
              Loading
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
