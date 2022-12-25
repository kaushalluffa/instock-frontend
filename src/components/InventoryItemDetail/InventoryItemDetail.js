import React from "react"
import { useEffect, useState } from "react"
import { useParams, useHistory, Link } from "react-router-dom"
import axios from "axios"
import "./InventoryItemDetail.scss"
import editIcon from "../../assets/icons/edit-24px.svg"
import backArrow from "../../assets/icons/arrow_back-24px.svg"

export default function InventoryItemDetails() {
  let history = useHistory()
  let { warehouseId, item } = useParams()
  let url = `${process.env.REACT_APP_URL}/inventories`

  const [itemToDisplay, setItemToDisplay] = useState({
    itemName: "",
    description: "",
    category: "",
    quantity: 0,
    warehouse: "",
    stock: "",
    inventoryId: "",
  })

  //function that handles click on return button
  function back(e) {
    //prevent multiple clicks to bring the use further back into the route
    e.stopPropagation()
    //go back to the route in which this was called
    history.goBack()
  }

  //function that changes HTML depending if item is in stock or not
  function returnStock() {
    if (itemToDisplay.stock === "In Stock") {
      return (
        <p className="item-detail__text item-detail__text--in-stock">
          IN STOCK
        </p>
      )
    } else {
      return (
        <p className="item-detail__text item-detail__text--off-stock">
          OUT OF STOCK
        </p>
      )
    }
  }

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const getItem = response.data.filter(
          (inventoryItem) =>
            inventoryItem.warehouseID === warehouseId &&
            inventoryItem.itemName.toLowerCase() === item
        )

        setItemToDisplay({
          itemName: getItem[0].itemName,
          description: getItem[0].description,
          quantity: getItem[0].quantity,
          warehouse: getItem[0].warehouseName,
          stock: getItem[0].status,
          category: getItem[0].category,
          inventoryId: getItem[0]?.id,
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }, [url, item, warehouseId])

  return (
    <div className="item-detail">
      <div className="item-detail__header">
        <div className="item-detail__title-wrapper">
          <img
            onClick={back}
            className="item-detail__back-arrow"
            src={backArrow}
            alt="back arrow"
          />
          <h1 className="item-detail__title">{itemToDisplay.itemName}</h1>
        </div>
        <div className="item-detail__edit-wrapper">
          <Link
            to={`/inventory/edit/${warehouseId}/${itemToDisplay.inventoryId}`}
          >
            <img
              // will add onClick event for opening the edit details
              className="item-detail__edit-icon"
              src={editIcon}
              alt="edit icon"
            />

            <p className="item-detail__edit-text">Edit</p>
          </Link>
        </div>
      </div>
      <div className="item-detail__card">
        <div className="item-detail__description-container">
          <h4 className="item-detail__label">ITEM DESCRIPTION:</h4>
          <p className="item-detail__text">{itemToDisplay.description}</p>
          <h4 className="item-detail__label item-detail__label--gap">
            CATEGORY:
          </h4>
          <p className="item-detail__text">{itemToDisplay.category}</p>
        </div>
        <div className="item-detail__status-container">
          <div className="item-detail__wrapper">
            <h4 className="item-detail__label">STATUS:</h4>
            {returnStock()}
            <h4 className="item-detail__label  item-detail__label--gap">
              WAREHOUSE:
            </h4>
            <p className="item-detail__text">{itemToDisplay.warehouse}</p>
          </div>
          <div className="item-detail__wrapper">
            <h4 className="item-detail__label">QUANTITY:</h4>
            <p className="item-detail__text">{itemToDisplay.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
