import React from "react";
import { useParams, useHistory } from "react-router-dom";
import "./DeleteInventory.scss";
import closeButton from "../../assets/icons/close-24px.svg";

// Validate String

// Changes first letter of Inventory to Capital
//check for space

export default function DeleteInventory() {
  let history = useHistory();
  let location = useParams();
  // Variable that capitalizes the first
  //
  // Handles click outside of modal area and cancel button
  function back(e) {
    e.stopPropagation();
    history.goBack();
  }
  //prevent multiple clicks to bring the use further back into the route
  //go back to the route in which this was called
  //
  // Function that deletes inventory and send user back to previous page
  function submitDelete(e) {}
  //delete request
  //prevent multiple clicks to bring the use further back into the route
  //go back to the route in which this was called
  return <div>{/* hardcode */}</div>;
}
