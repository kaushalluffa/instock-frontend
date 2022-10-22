import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './DeleteWarehouse.scss';
import closeButton from '../../assets/icons/close-24px.svg';

//Function that changes the first letter of the location coming through useParams() to upper case
function upperCaseFirstLetter(string) {
  //validates whether a valid location string has been received
  if (!string) {
    return 'Invalid Location';
  }
  //saves the index of the space
  let spaceIndex = string.indexOf(' ');
  //check whether are spaces or not.
  if (spaceIndex === -1) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    let secondWordIndex = spaceIndex + 1;
    return (
      string.charAt(0).toUpperCase() +
      string.slice(1, spaceIndex) +
      ' ' +
      string.charAt(secondWordIndex).toUpperCase() +
      string.slice(secondWordIndex + 1)
    );
  }
}

export default function DeleteWarehouse() {
  let history = useHistory();
  let location = useParams();
  //variable that capitalizes the first
  let warehouse = upperCaseFirstLetter(location.location);

  //function that handles click outside of modal area and cancel button
  function back(e) {
    //prevent multiple clicks to bring the use further back into the route
    e.stopPropagation();
    //go back to the route in which this was called
    history.goBack();
  }

  //function that deletes warehouse and send user back to previous page
  function submitDelete(e) {
    const url = 'http://localhost:8080/warehouses/delete/' + location.location;
    //DELETE request
    fetch(url, { method: 'DELETE' })
      .then(() => {
        alert('Warehouse was delete from the system!');
      })
      .catch((e) => {
        alert(e + ' - Warehouse not found');
      });
    //prevent multiple clicks to bring the use further back into the route
    e.stopPropagation();
    //go back to the route in which this was called
    history.goBack();
  }

  return (
    <div className="modal-wrapper">
      <div className="delete-warehouse">
        <div className="delete-warehouse__txt-container">
          <div className="delete-warehouse__icon-wrapper">
            <img
              onClick={back}
              className="delete-warehouse__icon"
              src={closeButton}
              alt="X"
            />
          </div>
          <h1 className="delete-warehouse__title">
            Delete {warehouse} warehouse?
          </h1>
          <p className="delete-warehouse__txt">
            Please confirm that you’d like to delete the {warehouse} from the
            list of warehouses. You won’t be able to undo this action.
          </p>
        </div>
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
