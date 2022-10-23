import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/Header/Header"
import "./App.scss"
import RouteMap from "./components/RouteMap/RouteMap"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <RouteMap />
      </div>
      <Footer />
    </Router>
  )
}

export default App
