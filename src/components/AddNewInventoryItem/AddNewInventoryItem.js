import axios from "axios"
import React, { useState } from "react"
import { ReactComponent as ArrowBack } from "../../assets/icons/arrow_back-24px.svg"
import { ReactComponent as DropDown } from "../../assets/icons/arrow_drop_down-24px.svg"
import { v4 as uuidv4 } from "uuid"

import "./AddNewInventoryItem.scss"
import { useHistory } from "react-router-dom"
const AddNewInventoryItem = (props) => {
  const [itemName, setItemName] = useState("")
  const [itemDescription, setItemDescription] = useState("")
  const [itemCategory, setItemCategory] = useState("")
  const [itemStatus, setItemStatus] = useState(true)
  const [itemQuantity, setItemQuantity] = useState(0)
  const [itemWarehouse, setItemWarehouse] = useState("")
  const [warehouseID, setWarehouseID] = useState("")
  const history = useHistory()
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
  function getWarehouseId(name) {
    axios.get("http://localhost:8080/warehouses").then((res) => {
      const selectedWarehouse = res.data.find((w) => w.name === name)
      setWarehouseID(selectedWarehouse.id)
    })
  }
  const newInventoryItemData = {
    id: uuidv4(),
    warehouseID: warehouseID,
    warehouseName: itemWarehouse,
    itemName: itemName,
    description: itemDescription,
    category: itemCategory,
    status: itemStatus ? "In Stock" : "Out of Stock",
    quantity: itemQuantity,
  }
  function postNewInventoryItem() {
    getWarehouseId(itemWarehouse)
    axios({
      method: "post",
      url: "http://localhost:8080/inventory-item/create",
      data: newInventoryItemData,
    })
    setItemName("")
    setItemDescription("")
    setItemCategory("")
    setItemStatus(true)
    setItemQuantity(0)
    setItemWarehouse("")
  }
  return (
    <div className="addNewItem">
      <div className="addNewItem__header">
        <div className="addNewItem__name">
          <span className="addNewItem__name--icon" onClick={history.goBack}>
            <ArrowBack />
          </span>
          <h1 className="addNewItem__name--heading">Add New Inventory Item</h1>
        </div>
      </div>
      <div className="addNewItem__container">
        <div className="addNewItem__details">
          <h2 className="addNewItem__details--heading">Item Details</h2>
          <div className="addNewItem__details--name">
            <label className="label">Item Name</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </div>
          <div className="addNewItem__details--name">
            <label className="label">Item Description</label>
            <textarea
              type="text"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              required
            />
          </div>
          <div className="addNewItem__details--name">
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
        <div className="addNewItem__availability">
          <h2 className="addNewItem__availability--heading">
            Item Availability
          </h2>
          <div className="addNewItem__availability--status">
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
          <div className="addNewItem__availability--quantity">
            <label className="label">Quantity</label>
            <input
              type="number"
              disabled={!itemStatus}
              required
              value={itemQuantity}
              onChange={(e) => setItemQuantity(e.target.value)}
            />
          </div>
          <div className="addNewItem__availability--warehouse">
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
      <div className="addNewItem__footer">
        <button className="addNewItem__footer--cancel">Cancel</button>
        <button
          className="addNewItem__footer--add"
          onClick={postNewInventoryItem}
        >
          + Add Item
        </button>
      </div>
    </div>
  )
}

export default AddNewInventoryItem
