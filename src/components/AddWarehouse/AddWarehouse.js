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
  const [error, setError] = useState({});

  // editted warehouse details input from user
  const newWarehouseDetails = {
    id: props?.id,
    warehouseName: warehouseName,
    address: warehouseStreetAddress,
    city: warehouseCity,
    country: warehouseCountry,
    contact: {
      name: contactName,
      position: contactPosition,
      phone: contactPhoneNumber,
      email: contactEmail,
    },
  };

  function handleValidation() {
    let formIsValid = true;

    if (!warehouseName) {
      formIsValid = false;
      error["warehouseName"] = "This field is required";
    }
    if (!warehouseStreetAddress) {
      formIsValid = false;
      error["warehouseStreetAddress"] = "This field is required";
    }
    if (!warehouseCity) {
      formIsValid = false;
      error["warehouseCity"] = "This field is required";
    }
    if (!warehouseCountry) {
      formIsValid = false;
      error["warehouseCountry"] = "This field is required";
    }
    if (!contactName) {
      formIsValid = false;
      error["contactName"] = "This field is required";
    }
    if (!contactPosition) {
      formIsValid = false;
      error["contactPosition"] = "This field is required";
    }
    if (!contactPhoneNumber) {
      formIsValid = false;
      error["contactPhoneNumber"] = "This field is required";
    }
    if (!contactEmail) {
      formIsValid = false;
      error["contactEmail"] = "This field is required";
    }
    return formIsValid;
  }

  function resetFields() {
    setWarehouseName("");
    setWarehouseStreetAddress("");
    setwarehouseCity("");
    setWarehouseCountry("");
    setContactName("");
    setContactPosition("");
    setContactPhoneNumber("");
    setContactEmail("");
  }

  function formSubmit(e) {
    e.preventDefault();
    if (handleValidation()) {
      console.log("Form has been successfully submitted");
      axios({
        method: "post",
        url: "http://localhost:8080/warehouse/new",
        data: newWarehouseDetails,
      });
      resetFields();
    } else {
      console.log("Form has missing fields. Please resolve the errors");
    }
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
      <form onSubmit={formSubmit}>
        <div className="addWarehouse__info">
          <div className="addWarehouse__info--warehouse">
            <h2 className="heading-2">Warehouse Details</h2>
            <h3 className="heading-3">Warehouse Name</h3>
            <input
              className="input-field"
              value={warehouseName}
              onChange={(e) => setWarehouseName(e.target.value)}
              error={error["warehouseName"]}
              placeholder="Warehouse Name"
            ></input>
            <h3 className="heading-3">Street Address</h3>
            <input
              className="input-field"
              value={warehouseStreetAddress}
              onChange={(e) => setWarehouseStreetAddress(e.target.value)}
              error={error["warehouseStreetAddress"]}
              placeholder="Street Address"
            ></input>
            <h3 className="heading-3">City</h3>
            <input
              className="input-field"
              value={warehouseCity}
              onChange={(e) => setwarehouseCity(e.target.value)}
              error={error["warehouseCity"]}
              placeholder="City"
            ></input>
            <h3 className="heading-3">Country</h3>
            <input
              className="input-field"
              value={warehouseCountry}
              onChange={(e) => setWarehouseCountry(e.target.value)}
              error={error["warehouseCountry"]}
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
              error={error["contactName"]}
              placeholder="Contact Name"
            ></input>
            <h3 className="heading-3">Position</h3>
            <input
              className="input-field"
              value={contactPosition}
              onChange={(e) => setContactPosition(e.target.value)}
              error={error["contactPosition"]}
              placeholder="Position"
            ></input>
            <h3 className="heading-3">Phone Number</h3>
            <input
              className="input-field"
              value={contactPhoneNumber}
              onChange={(e) => setContactPhoneNumber(e.target.value)}
              error={error["contactPhoneNumber"]}
              placeholder="Phone Number"
            ></input>
            <h3 className="heading-3">Email</h3>
            <input
              className="input-field"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              error={error["contactEmail"]}
              placeholder="Email"
            ></input>
          </div>
        </div>
        <div className="addWarehouse__buttons">
          <button className="addWarehouse__button addWarehouse__button--cancel">
            <h3 className="heading-3--cancel">Cancel</h3>
          </button>
          <button className="addWarehouse__button addWarehouse__button--save">
            <h3 className="heading-3--save" type="submit">
              + Add Warehouse
            </h3>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddWarehouse;
