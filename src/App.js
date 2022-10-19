import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';
import RouteController from './components/RouteController/RouteController';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <RouteController />
      </div>
    </Router>
  );
}

export default App;
