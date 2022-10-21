import React, { useState } from "react";
import "./AddWarehouse.scss";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";

function AddWarehouse(props) {
  // initialize state for all warehouse details input fields
  const [warehouseName, setWarehouseName] = useState("");
  const [warehouseStreetAddress, setWarehouseStreetAddress] = useState("");
  const [warehouseCity, setwarehouseCity] = useState("");
  const [warehouseCountry, setWarehouseCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPosition, setContactPosition] = useState("");
  const [contactPhoneNumber, setContactPhoneNumber] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  // editted warehouse details input from user
  const newWarehouseDetails = {
    id: props.id || "2922c286-16cd-4d43-ab98-c79f698aeab0",
    warehouseName: warehouseName || "Manhattan",
    address: warehouseStreetAddress || "503 Broadway",
    city: warehouseCity || "New York",
    country: warehouseCountry || "USA",
    contact: {
      name: contactName || "Parmin Aujla",
      position: contactPosition || "Warehouse Manager",
      phone: contactPhoneNumber || "+1 (646) 123-1234",
      email: contactEmail || "paujla@instock.com",
    },
  };

  // put request to edit warehouse object
  function addWarehouseDetails() {
    axios({
      method: "post",
      url: "http://localhost:8080/warehouse/new",
      data: newWarehouseDetails,
    });
    setWarehouseName("");
    setWarehouseStreetAddress("");
    setwarehouseCity("");
    setWarehouseCountry("");
    setContactName("");
    setContactPosition("");
    setContactPhoneNumber("");
    setContactEmail("");
  }

  return (
    <div className="addWarehouse">
      <div className="addWarehouse__header">
        <div className="addWarehouse__name">
          <span className="addWarehouse__name--icon">
            <img src={ArrowBack} alt="icon" />
          </span>
          <h1 className="addWarehouse__name--heading">Add New Warehouse</h1>
        </div>
      </div>
      <form>
        <div className="addWarehouse__info">
          <div className="addWarehouse__info--warehouse">
            <h2 className="heading-2">Warehouse Details</h2>
            <h3 className="heading-3">Warehouse Name</h3>
            <input
              className="input-field"
              value={warehouseName}
              onChange={(e) => setWarehouseName(e.target.value)}
              placeholder="Warehouse Name"
            ></input>
            <h3 className="heading-3">Street Address</h3>
            <input
              className="input-field"
              value={warehouseStreetAddress}
              onChange={(e) => setWarehouseStreetAddress(e.target.value)}
              placeholder="Street Address"
            ></input>
            <h3 className="heading-3">City</h3>
            <input
              className="input-field"
              value={warehouseCity}
              onChange={(e) => setwarehouseCity(e.target.value)}
              placeholder="City"
            ></input>
            <h3 className="heading-3">Country</h3>
            <input
              className="input-field"
              value={warehouseCountry}
              onChange={(e) => setWarehouseCountry(e.target.value)}
              placeholder="Country"
            ></input>
          </div>
          <div className="addWarehouse__info--contact">
            <h2 className="heading-2">Contact Details</h2>
            <h3 className="heading-3">Contact Name</h3>
            <input
              className="input-field"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              placeholder="Contact Name"
            ></input>
            <h3 className="heading-3">Position</h3>
            <input
              className="input-field"
              value={contactPosition}
              onChange={(e) => setContactPosition(e.target.value)}
              placeholder="Position"
            ></input>
            <h3 className="heading-3">Phone Number</h3>
            <input
              className="input-field"
              value={contactPhoneNumber}
              onChange={(e) => setContactPhoneNumber(e.target.value)}
              placeholder="Phone Number"
            ></input>
            <h3 className="heading-3">Email</h3>
            <input
              className="input-field"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              placeholder="Email"
            ></input>
          </div>
        </div>
        <div className="addWarehouse__buttons">
          <button className="addWarehouse__button addWarehouse__button--cancel">
            <h3 className="heading-3--cancel">Cancel</h3>
          </button>
          <button className="addWarehouse__button addWarehouse__button--save">
            <h3 className="heading-3--save" onClick={addWarehouseDetails}>
              + Add Warehouse
            </h3>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddWarehouse;
