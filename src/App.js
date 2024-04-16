import "./App.css";
import Mid from "./components/Mid/Mid";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <NavBar />
        <Mid />
      </div>

      <div className="musicControls">music controls</div>
    </div>
  );
}

export default App;
