import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.scss";
import RouteMap from "./components/RouteMap/RouteMap";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <RouteMap />
      </div>
    </Router>
  );
}

export default App;
