import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
  let name = "Carlos";
  let age = 30;
  let color = "verde";
  return (
    <>
      <Header />
      <h1 className={color}>
        Meu nome é {name} e tenho {age} anos. tipo assim, {15 + 15} Anos.
      </h1>
      <button>Clique aqui</button>
      <Footer />
    </>
  );
}

export default App;
