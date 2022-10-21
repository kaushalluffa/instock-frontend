import axios from "axios"
import React, { useState } from "react"
import { ReactComponent as ArrowBack } from "../../assets/icons/arrow_back-24px.svg"
import { ReactComponent as DropDown } from "../../assets/icons/arrow_drop_down-24px.svg"
import { v4 as uuidv4 } from "uuid"

import "./EditInventoryItem.scss"

const EditInventoryItem = (props) => {
  const [itemName, setItemName] = useState("")
  const [itemDescription, setItemDescription] = useState("")
  const [itemCategory, setItemCategory] = useState("")
  const [itemStatus, setItemStatus] = useState(false)
  const [itemWarehouse, setItemWarehouse] = useState("")
  const categories = ["Electronics", "Gear", "Apparel", "Accessories", "Health"]

  const warehouses = [
    "Manhattan",
    "Washington",
    "Jersey",
    "San Fran",
    "Santa Monica",
    "Seattle",
    "Miami",
  ]

  function statusHandler(e) {
    if (e.target.value === "In Stock") {
      setItemStatus(true)
    }
    if (e.target.value === "Out Of Stock") {
      setItemStatus(false)
    }
  }

  const editInventoryItemData = {
    id: uuidv4(),
    itemName: itemName || "Television",
    description:
      itemDescription ||
      'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
    category: itemCategory || "Electronics",
    status: itemStatus ? "In Stock" : "Out of Stock",
    warehouseID: props.warehouseID || "2922c286-16cd-4d43-ab98-c79f698aeab0",
    warehouseName: itemWarehouse || "Manhattan",
  }
  function editInventoryItem() {
    axios({
      method: "put",
      url: "http://localhost:8080/inventory-item/edit",
      data: editInventoryItemData,
    })
    setItemName("")
    setItemDescription("")
    setItemCategory("")
    setItemStatus(true)

    setItemWarehouse("")
  }

  return (
    <div className="editItem">
      <div className="editItem__header">
        <div className="editItem__name">
          <span className="editItem__name--icon">
            <ArrowBack />
          </span>
          <h1 className="editItem__name--heading">Edit Inventory Item</h1>
        </div>
      </div>
      <div className="editItem__container">
        <div className="editItem__details">
          <h2 className="editItem__details--heading">Item Details</h2>
          <div className="editItem__details--name">
            <label className="label">Item Name</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </div>
          <div className="editItem__details--name">
            <label className="label">Item Description</label>
            <textarea
              type="text"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              required
            />
          </div>
          <div className="editItem__details--name">
            <label className="label">Category</label>
            <select
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
            >
              <option
                className="default"
                value={`Please Select ${(<DropDown />)}`}
              >
                Please Select
              </option>
              {categories.map((category, i) => (
                <option value={category} key={i}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="editItem__availability">
          <h2 className="editItem__availability--heading">Item Availability</h2>
          <div className="editItem__availability--status">
            <label className="label">Status</label>
            <div className="radio__container">
              <input
                type="radio"
                name="status"
                required
                value="In Stock"
                id="inStock"
                checked={itemStatus}
                onChange={(e) => statusHandler(e)}
              />
              <label htmlFor="inStock">In Stock</label>

              <input
                type="radio"
                name="status"
                required
                value="Out Of Stock"
                id="outOfStock"
                checked={!itemStatus}
                onChange={(e) => statusHandler(e)}
              />
              <label htmlFor="outOfStock">Out Of Stock</label>
            </div>
          </div>

          <div className="editItem__availability--warehouse">
            <label className="label">Warehouse</label>
            <select
              value={itemWarehouse}
              onChange={(e) => setItemWarehouse(e.target.value)}
            >
              <option
                className="default"
                value={`Please Select ${(<DropDown />)}`}
              >
                Please Select
              </option>
              {warehouses.map((category, i) => (
                <option value={category} key={i}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="editItem__footer">
        <button className="editItem__footer--cancel">Cancel</button>
        <button className="editItem__footer--add" onClick={EditInventoryItem}>
          Save
        </button>
      </div>
    </div>
  )
}
export default EditInventoryItem
