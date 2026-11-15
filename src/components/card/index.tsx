import "./card.css";

type props = {
  title: string;
  description: string;
};

export const Card = ({ title, description }: props) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
