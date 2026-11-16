import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Card } from "./components/card";

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
      >
        <p>Ola, {name}!</p>
        <p>Você tem {age} anos.</p>
        <p>Sua cor favorita é {color}.</p>
      </Card>
      <Footer />
    </div>
  );
}

export default App;
