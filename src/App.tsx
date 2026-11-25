import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { StatsCard } from "./components/stats-card";

type StatsItem = {
  title: string;
  mainValue: number;
  comparisonPercent: number;
  isPositive: boolean;
};

export default function App() {
  const stats: StatsItem[] = [
    {
      title: "Vendas do mês",
      mainValue: 1250,
      comparisonPercent: 8,
      isPositive: true,
    },
    {
      title: "Novos clientes",
      mainValue: 48,
      comparisonPercent: 5,
      isPositive: false,
    },
    {
      title: "Cancelamentos",
      mainValue: 48,
      comparisonPercent: 5,
      isPositive: false,
    },
    {
      title: "Visitantes do site",
      mainValue: 1250,
      comparisonPercent: 8,
      isPositive: true,
    },
  ];

  return (
    <div>
      <Header />

      <div className="cards">
        {stats.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            mainValue={item.mainValue}
            comparisonPercent={item.comparisonPercent}
            isPositive={item.isPositive}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
