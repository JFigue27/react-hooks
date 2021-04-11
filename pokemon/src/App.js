import "./App.css";
import Layout from "./components/Layout/Layout";
import Pokemons from "./components/Pokemons/Pokemons";

function App() {
  return (
    <div className="App">
      <Layout>
        <Pokemons />
        <div>
          <span>aqui va el card</span>
        </div>
      </Layout>
    </div>
  );
}

export default App;
