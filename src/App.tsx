import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Card } from "./components/card";

function App() {
  let name = "Carlos";
  let age = 30;
  let color = "verde";
  return (
    <>
      <Header />
      <Card title="Primeiro Card" description="Este é o primeiro card" />
      <Card title="Segundo Card" description="Este é o segundo card" />
      <Card title="Terceiro Card" description="Este é o terceiro card" />
      <Footer />
    </>
  );
}

export default App;
