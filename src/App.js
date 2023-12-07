import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

function App() {
  // it'd be cool to use a <Typewriter> to introduce wilsonistyping
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
    </div>
  );
}

export default App;
