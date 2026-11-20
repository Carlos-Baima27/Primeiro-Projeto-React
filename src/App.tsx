import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Card } from "./components/card";
import { SpecialCard } from "./components/special-card";

function App() {
  let name = "Carlos";
  let age = 30;
  let color = "verde";
  return (
    <div>
      <Header />
      <Card
        title="Primeiro Card"
        description="Esta é a descrição do primeiro card."
        active={true}
      >
        <p>Ola, {name}!</p>
        <p>Você tem {age} anos.</p>
        <p>Sua cor favorita é {color}.</p>
      </Card>
      <SpecialCard
        title="Vendas do mês"
        value={1250}
        percentage={8}
        isPositive={true}
      />
      <SpecialCard
        title="Novos clientes"
        value={48}
        percentage={5}
        isPositive={false}
      />
      <Footer />
    </div>
  );
}

export default App;
