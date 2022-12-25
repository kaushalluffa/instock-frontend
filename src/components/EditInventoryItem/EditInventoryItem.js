import axios from "axios"
import React, { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { ReactComponent as ArrowBack } from "../../assets/icons/arrow_back-24px.svg"
import { ReactComponent as DropDown } from "../../assets/icons/arrow_drop_down-24px.svg"
import "./EditInventoryItem.scss"

const EditInventoryItem = (props) => {
  const [itemName, setItemName] = useState("")
  const [itemDescription, setItemDescription] = useState("")
  const [itemCategory, setItemCategory] = useState("")
  const [itemStatus, setItemStatus] = useState(false)
  const [itemQuantity, setItemQuantity] = useState(0)
  const [itemWarehouse, setItemWarehouse] = useState("")
  const categories = ["Electronics", "Gear", "Apparel", "Accessories", "Health"]
  const { warehouseID, inventoryId } = useParams()
  const history = useHistory()
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
    id: inventoryId,
    itemName: itemName,
    description: itemDescription,
    category: itemCategory,
    status: itemStatus ? "In Stock" : "Out of Stock",
    warehouseID: warehouseID,
    quantity: itemQuantity,
    warehouseName: itemWarehouse,
  }
  function editInventoryItem() {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_URL}/inventory-item/edit`,
      data: editInventoryItemData,
    })
    setItemName("")
    setItemDescription("")
    setItemCategory("")
    setItemStatus("")
    setItemQuantity("")
    setItemWarehouse("")
  }

  return (
    <div className="editItem">
      <div className="editItem__header">
        <div className="editItem__name">
          <span onClick={history.goBack} className="editItem__name--icon">
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
        <button className="editItem__footer--edit" onClick={editInventoryItem}>
          Save
        </button>
      </div>
    </div>
  )
}
export default EditInventoryItem
