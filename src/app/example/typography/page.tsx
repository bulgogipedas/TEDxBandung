import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function Page() {
  return (
    <section className="page__container">
      <div>
        <Link href="/example" className="flex items-center gap-5 mt-20">
          <FaArrowLeft size={30} />
          <h1 className="text-title">Typography</h1>
        </Link>
        <div className="mt-16">
          <h2 className="text-title">Title</h2>
          <span className="text-sm text-gray-600">.text-title</span>
        </div>
        <div>
          <h3 className="text-subtitle">Sub title</h3>
          <span className="text-sm text-gray-600">.text-subtitle</span>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-heading">Heading</h2>
        <span className="text-sm text-gray-600">.text-heading</span>
      </div>
      <div className="my-2">
        <h3 className="text-subheading">Sub Heading</h3>
        <span className="text-sm text-gray-600">.text-subheading</span>
      </div>
      <p className="text-paragraph">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est vitae
        voluptatibus dolores facilis nostrum labore qui, repudiandae pariatur
        vero molestias. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Asperiores minus rem incidunt perferendis deserunt, sed dolores
        voluptate natus repellendus voluptatibus. Iste obcaecati suscipit illo
        voluptates, quia placeat veniam aliquid est?
      </p>
      <span className="text-sm text-gray-600">.text-paragraph</span>
    </section>
  );
}
