import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';
import DeleteWarehouse from './components/DeleteWarehouse/DeleteWarehouse';
import WarehouseList from './components/WarehouseList/WarehouseList';
let pageLocation = useLocation();
let pageBackground = location.state && location.state.background;

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch location={pageBackground || pageLocation}>
          <Route path="/warehouse/delete/:location">
            <DeleteWarehouse />
          </Route>
          <Route path="/warehouse/edit/:location">
            {/* add component for edit modal */}
          </Route>
          <Route path="/warehouse/:location">
            <WarehouseDetails />
          </Route>
          <Route exact path="/warehouse/new">
            {/* add component for new warehouse modal */}
          </Route>
          <Route path="/inventory/delete/:item">
            {/* route path for deleting item modal */}
          </Route>
          <Route path="/inventory/edit/:item">
            {/* route path for editing item modal */}
          </Route>
          <Route path="/inventory/new">
            {/* Route path for adding a new item */}
          </Route>
          <Route path="/inventory/:item">
            {/* route path for inventory item details */}
          </Route>
          <Route exact path="/warehouse">
            {<WarehouseList />}
          </Route>
          <Route exact path="/inventory">
            {/* route path for inventory */}
          </Route>
          <Route exact path="/">
            {<WarehouseList />}
          </Route>
        </Switch>
        {/* show the modal when background page is set */}
        {pageBackground && (
          <Route path="/warehouse/delete/:location">
            <DeleteWarehouse />
          </Route>
        )}
      </div>
    </Router>
  );
}

export default App;
