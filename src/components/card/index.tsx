import "./card.css";

type props = {
  title: string;
  description?: string;
  active?: boolean;
  children?: React.ReactNode;
};

export const Card = ({
  title,
  description = "Sem descrição",
  active = false,
  children,
}: props) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>

      {active && (
        <>
          <hr />
          <div>{children}</div>
        </>
      )}
    </div>
  );
};
