import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';
// import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';
// import DeleteWarehouse from './components/DeleteWarehouse/DeleteWarehouse';
// import WarehouseList from './components/WarehouseList/WarehouseList';
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
