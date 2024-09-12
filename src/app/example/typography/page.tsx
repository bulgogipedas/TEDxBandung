export default function Page() {
  return (
    <section className="px-10">
      <div>
        <h1 className="text-2xl mb-5 underline underline-offset-8">
          Title, Sub Title, and Paragraph
        </h1>
        <div>
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
