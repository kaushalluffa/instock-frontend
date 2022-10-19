import React from "react";
import "./EditWarehouse.scss";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";

function EditWarehouse() {
  return (
    <div className="editWarehouse">
      <div className="editWarehouse__header">
        <div className="editWarehouse__name">
          <span className="editWarehouse__name--icon">
            <img src={ArrowBack} alt="icon" />
          </span>
          <h1 className="editWarehouse__name--heading">Edit Warehouse</h1>
        </div>
      </div>
      <div className="editWarehouse__info">
        <div className="editWarehouse__info--warehouse">
          <h2 className="heading-2">Warehouse Details</h2>
          <h3 className="heading-3">Warehouse Name</h3>
          <input className="input-field"></input>
          <h3 className="heading-3">Street Address</h3>
          <input className="input-field"></input>
          <h3 className="heading-3">City</h3>
          <input className="input-field"></input>
          <h3 className="heading-3">Country</h3>
          <input className="input-field"></input>
        </div>
        <div className="editWarehouse__info--contact">
          <h2 className="heading-2">Contact Details</h2>
          <h3 className="heading-3">Contact Name</h3>
          <input className="input-field"></input>
          <h3 className="heading-3">Position</h3>
          <input className="input-field"></input>
          <h3 className="heading-3">Phone Number</h3>
          <input className="input-field"></input>
          <h3 className="heading-3">Email</h3>
          <input className="input-field"></input>
        </div>
      </div>
    </div>
  );
}

export default EditWarehouse;
