import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import './DeleteWarehouse.scss';
import closeButton from '../../assets/icons/close-24px.svg';

//ignore this import its just dummy data everything will be replaced with a fetch request from api
import demoData from '../../assets/data/inventories.json';
// the following function filters out the warehouse and its inventory but it will be replaced by a fetch request

////////////////////////////
function details(wareHouseName) {
  const filteredWarehouse = demoData.filter(
    (d) => d.warehouseName.toLowerCase() === wareHouseName.toLowerCase()
  );
  return filteredWarehouse;
}

////////////////////////////
export default function DeleteWarehouse({ props }) {
  let history = useHistory();
  let { warehouse } = useParams();
  //   let warehouseCap = warehouse.charAt(0) + warehouse.slice(1);
  //function that capitalizes first letter of warehouse variable

  //function that handles click outside of modal area and cancel button
  function back(e) {
    //prevent multiple clicks to bring the use further back into the route
    e.stopPropagation();
    //go back to the route in which this was called
    history.goBack();
  }

  //function that deletes warehouse and send user back to previous page
  function submitDelete(e) {
    //////////////////////////will add DELETE request
    //prevent multiple clicks to bring the use further back into the route
    e.stopPropagation();
    //go back to the route in which this was called
    history.goBack();
  }

  return (
    <div onClick={back} className="modal-wrapper">
      <div className="delete-warehouse">
        <div className="delete-warehouse__icon-wrapper">
          <img className="delete-warehouse__icon" src={closeButton} alt="X" />
        </div>
        <h1 className="delete-warehouse__title">
          Delete {warehouse} warehouse?
        </h1>
        <p className="delete-warehouse__txt">
          Please confirm that you’d like to delete the {warehouse} from the list
          of warehouses. You won’t be able to undo this action.
        </p>
        <div className="delete-warehouse__btn-wrapper">
          <button
            onClick={back}
            className="delete-warehouse__btn delete-warehouse__btn--cancel">
            Cancel
          </button>
          <button
            onClick={submitDelete}
            className="delete-warehouse__btn delete-warehouse__btn--delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
