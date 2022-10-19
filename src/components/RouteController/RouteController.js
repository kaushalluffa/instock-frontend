import React from 'react';
import { Route, useLocation, Switch } from 'react-router-dom';
import WarehouseList from '../WarehouseList/WarehouseList';
import DeleteWarehouse from '../DeleteWarehouse/DeleteWarehouse';
import WarehouseDetails from '../WarehouseDetails/WarehouseDetails';

export default function NavigationController() {
  let location = useLocation();
  //Background location is from where the modal Component is called from
  let background = location.state && location.state.background;
  return (
    <>
      <Switch location={background || location}>
        <Route path="/warehouse/delete/:location">
          <DeleteWarehouse />
        </Route>
        <Route path="/warehouse/edit/:location">
          {/* add component for edit modal */}
        </Route>
        <Route path="/warehouse/:location">
          <WarehouseDetails />
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
        <Route exact path="/warehouse"></Route>
        <Route exact path="/inventory">
          {/* route path for inventory */}
        </Route>
        <Route exact path="/">
          <WarehouseList />
        </Route>
        <Route exact path="/"></Route>
        {/* Show the modal when a background page is set */}
        {background && (
          <Route path="/delete/:location" children={<DeleteWarehouse />} />
        )}
      </Switch>
    </>
  );
}
