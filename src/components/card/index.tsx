import "./card.css";

type props = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export const Card = ({
  title,
  description = "Sem descrição",
  children,
}: props) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <hr />
      {children}
    </div>
  );
};
