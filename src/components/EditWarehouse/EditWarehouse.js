import React, { useState } from "react"
import "./EditWarehouse.scss"
import ArrowBack from "../../assets/icons/arrow_back-24px.svg"
import axios from "axios"
import { Link, useHistory, useParams } from "react-router-dom"

function EditWarehouse() {
  // initialize state for all warehouse details input fields
  const [warehouseName, setWarehouseName] = useState("")
  const [warehouseStreetAddress, setWarehouseStreetAddress] = useState("")
  const [warehouseCity, setwarehouseCity] = useState("")
  const [warehouseCountry, setWarehouseCountry] = useState("")
  const [contactName, setContactName] = useState("")
  const [contactPosition, setContactPosition] = useState("")
  const [contactPhoneNumber, setContactPhoneNumber] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const { warehouseID } = useParams()
  const history = useHistory()
  // editted warehouse details input from user
  const newWarehouseDetails = {
    id: warehouseID,
    name: warehouseName,
    address: warehouseStreetAddress,
    city: warehouseCity,
    country: warehouseCountry,
    contact: {
      name: contactName,
      position: contactPosition,
      phone: contactPhoneNumber,
      email: contactEmail,
    },
  }

  // put request to edit warehouse object
  function editWarehouseDetails(e) {
    e.preventDefault()
    axios({
      method: "post",
      url: "http://localhost:8080/edit-warehouse",
      data: newWarehouseDetails,
    })
    setWarehouseName("")
    setWarehouseStreetAddress("")
    setwarehouseCity("")
    setWarehouseCountry("")
    setContactName("")
    setContactPosition("")
    setContactPhoneNumber("")
    setContactEmail("")
  }

  return (
    <div className="editWarehouse">
      <div className="editWarehouse__header">
        <div className="editWarehouse__name">
          <span onClick={history.goBack} className="editWarehouse__name--icon">
            <img src={ArrowBack} alt="icon" />
          </span>
          <h1 className="editWarehouse__name--heading">Edit Warehouse</h1>
        </div>
      </div>
      <form>
        <div className="editWarehouse__info">
          <div className="editWarehouse__info--warehouse">
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
          <div className="editWarehouse__info--contact">
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
        <div className="editWarehouse__buttons">
          <Link to={`/warehouse/${warehouseID}`}>
            <button className="editWarehouse__button editWarehouse__button--cancel">
              <h3 className="heading-3--cancel">Cancel</h3>
            </button>
          </Link>
          <button className="editWarehouse__button editWarehouse__button--save">
            <h3
              className="heading-3--save"
              onClick={(e) => editWarehouseDetails(e)}
            >
              Save
            </h3>
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditWarehouse
