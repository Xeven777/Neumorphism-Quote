import "./App.css";
import RandomQuote from "./Components/RandomQuote/RandomQuote"

function App() {
  return (
    <div className="App">
      <header className="App-header">Neumorphism Quotes</header>
      <RandomQuote />
      <div className="foot">Made by <a href="https://bento.me/anish7" target="__blank">Anish</a></div>
    </div>
  );
}

export default App;
