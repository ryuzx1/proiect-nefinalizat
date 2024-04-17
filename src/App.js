import "./App.css";
import Mid from "./components/Mid/Mid";
import { NavBar } from "./components/NavBar/NavBar";
import { ReactComponent as PlayIcon } from "./svgs/playIcon.svg";

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <NavBar />
        <Mid />
      </div>

      <div className="musicControls">
        <span className="playIcon">
          <PlayIcon />
        </span>
      </div>
    </div>
  );
}

export default App;
