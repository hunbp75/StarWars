import "./App.css";
import FetchApi from "./components/FetchApi";

function App() {
  return (
    <div className="app-container">
      <h1 className="main-title">Star Wars People</h1>
      <FetchApi />
    </div>
  );
}

export default App;
