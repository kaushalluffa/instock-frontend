import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/Header/Header"
import "./App.scss"
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails"

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/warehouse/delete/:location">
            {/* add component for delete modal */}
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
            {/* route path for warehouse */}
          </Route>
          <Route exact path="/inventory">
            {/* route path for inventory */}
          </Route>
          <Route exact path="/">
            {/* path for home page - warehouse */}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
