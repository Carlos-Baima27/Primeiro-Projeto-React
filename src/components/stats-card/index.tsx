import { SpecialCard } from "../special-card";

type StatsCardProps = {
  title: string;
  mainValue: number;
  comparisonPercent: number;
  isPositive: boolean;
};

export const StatsCard = ({
  title,
  mainValue,
  comparisonPercent,
  isPositive,
}: StatsCardProps) => (
  <SpecialCard
    title={title}
    value={mainValue}
    percentage={comparisonPercent}
    isPositive={isPositive}
  />
);
