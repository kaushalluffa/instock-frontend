import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './DeleteWarehouse.scss';
import closeButton from '../../assets/icons/close-24px.svg';

////////////////////////////
export default function DeleteWarehouse() {
  let history = useHistory();
  let location = useParams();
  //variable that capitalizes the first
  let warehouse =
    location.location.charAt(0).toUpperCase() + location.location.slice(1);

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
