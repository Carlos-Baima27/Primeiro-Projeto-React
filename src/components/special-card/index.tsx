import "./special-card.css";

type SpecialCardProps = {
  title: string;
  value: number;
  percentage: number;
  isPositive: boolean;
};

export const SpecialCard = ({
  title,
  value,
  percentage,
  isPositive,
}: SpecialCardProps) => {
  const comparison = isPositive
    ? `+${Math.abs(percentage)}%`
    : `-${Math.abs(percentage)}%`;

  return (
    <article className="special-card">
      <h2 className="special-card__title">{title}</h2>
      <p className="special-card__value">{value}</p>
      <p
        className={`special-card__comparison ${
          isPositive ? "special-card__comparison--positive" : "special-card__comparison--negative"
        }`}
      >
        <strong>{comparison}</strong>
        <span>
          {isPositive ? "Acima do mês anterior" : "Abaixo do mês anterior"}
        </span>
      </p>
    </article>
  );
};
