import React from "react";
import { useParams, useHistory } from "react-router-dom";
import "./DeleteInventory.scss";
import closeButton from "../../assets/icons/close-24px.svg";

function upperCaseFirstLetter(string) {
  if (!string) {
    return "Invalid Inventory";
  }
  let spaceIndex = string.indexOf(" ");
  if (spaceIndex === -1) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    let secondWordIndex = spaceIndex + 1;
    return (
      string.charAt(0).toUpperCase() +
      string.slice(1, spaceIndex) +
      " " +
      string.charAt(secondWordIndex).toUpperCase() +
      string.slice(secondWordIndex + 1)
    );
  }
}
upperCaseFirstLetter("nome");

export default function DeleteInventory() {
  let history = useHistory();
  let item = useParams();
  // Variable that capitalizes the first
  let inventory = upperCaseFirstLetter(item.item);
  // Handles click outside of modal area and cancel button
  function back(e) {
    e.stopPropagation();
    history.goBack();
  }
  //prevent multiple clicks to bring the use further back into the route
  //go back to the route in which this was called
  //
  // Function that deletes inventory and send user back to previous page
  function submitDelete(e) {
    const url = "http://localhost:8080/inventory/delete/" + item.item;
    fetch(url, { method: "DELETE" })
      .then((response) => {
        alert("Inventory was deleted from the system!");
      })
      .catch((e) => {
        alert(e + " - Inventory not found");
      });
    e.stopPropagation();

    history.goBack();
  }

  //prevent multiple clicks to bring the use further back into the route
  //go back to the route in which this was called
  return (
    <div className="modal-wrapper">
      <div className="delete-inventory">
        <div className="delete-inventory__icon-wrapper">
          <img
            onClick={back}
            className="delete-inventory__icon"
            src={closeButton}
            alt="X"
          />
        </div>
        <h1 className="delete-inventory__title">
          Delete {inventory} inventory?
        </h1>
        <p className="delete-inventory__txt">
          Please confirm that you’d like to delete the {inventory} from the
          inventory list. You won’t be able to undo this action.
        </p>
        <div className="delete-inventory__btn-wrapper">
          <button
            onClick={back}
            className="delete-inventory__btn delete-inventory__btn--cancel"
          >
            Cancel
          </button>
          <button
            onClick={submitDelete}
            className="delete-inventory__btn delete-inventory__btn--delete"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
