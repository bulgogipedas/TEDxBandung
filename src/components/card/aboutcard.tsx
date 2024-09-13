interface Props {
  image: React.ReactNode;
  title: string;
  body: string;
}
export default function AboutCard(props: Props) {
  return (
    <div className="card card-about">
      <div className="mb-10">{props.image}</div>
      <div className="card-about__title">
        <h2 className="text-subheading">{props.title}</h2>
      </div>
      <div className="card-about__body">
        <p>{props.body}</p>
      </div>
    </div>
  );
}
