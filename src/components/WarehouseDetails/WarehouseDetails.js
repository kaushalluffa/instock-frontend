import React from "react"
import ArrowBack from "../../assets/icons/arrow_back-24px.svg"
import { ReactComponent as TagsArrows } from "../../assets/icons/sort-24px.svg"
import { ReactComponent as ChevronRight } from "../../assets/icons/chevron_right-24px.svg"
import { ReactComponent as DeleteBtn } from "../../assets/icons/delete_outline-24px.svg"
import { ReactComponent as EditBtn } from "../../assets/icons/edit-24px.svg"
import "./WarehousDetails.scss"
//ignore this import its just dummy data everything will be replaced with a fetch request from api
import demoData from "../../assets/data/inventories.json"
import { Link, useParams } from "react-router-dom"
// the following function filters out the warehouse and its inventory but it will be replaced by a fetch request

////////////////////////////
function details(wareHouseName) {
  const filteredWarehouse = demoData.filter(
    (d) => d.warehouseName.toLowerCase() === wareHouseName.toLowerCase()
  )
  return filteredWarehouse
}
/////////////////////////
function WarehouseDetails() {
  const { location } = useParams()
  const wareHouse = details(location)
  return (
    <div className="warehouseDetails">
      <div className="warehouseDetails__header">
        <div className="warehouseDetails__name">
          <span className="warehouseDetails__name--icon">
            <img src={ArrowBack} alt="icon" />
          </span>
          <h1 className="warehouseDetails__name--heading">
            {wareHouse[0]?.warehouseName}
          </h1>
        </div>
        <div className="warehouseDetails__button">
          <EditBtn />
          <h3>Edit</h3>
        </div>
      </div>
      {/*
      hardcoded info inside following section will be replaced with variables when fetched from the api
       */}
      <div className="warehouseDetails__info">
        <div className="warehouseDetails__info--address">
          <h3 className="label">WAREHOUSE ADDRESS:</h3>
          <p className="address">33 Pearl Street SW, Washington, USA</p>
        </div>
        <div className="warehouseDetails__contact">
          <div className="warehouseDetails__contact--name">
            <h3 className="label">CONTACT NAME:</h3>
            <p className="contactName">Graeme Lyon</p>
            <p className="contactPosition">Warehouse Manager</p>
          </div>
          <div className="warehouseDetails__contact--info">
            <h3 className="label">CONTACT INFORMATION:</h3>
            <p className="phoneNumber">{`+1 (647)504-0911`}</p>
            <p className="email">glyon@instock.com</p>
          </div>
        </div>
      </div>
      {/*
      hardcoded info inside above section will be replaced with variables when fetched from the api
       */}
      <div className="warehouseDetails__inventory">
        <div className="warehouseDetails__inventory--tags">
          <div className="tag">
            INVENTORY ITEM <TagsArrows />
          </div>
          <div className="tag">
            CATEGORY <TagsArrows />
          </div>
          <div className="tag">
            STATUS <TagsArrows />
          </div>
          <div className="tag">
            QTY <TagsArrows />
          </div>
          <div className="tag">
            ACTIONS <TagsArrows />
          </div>
        </div>
        <div className="warehouseDetails__inventory--items">
          {wareHouse.map((singleWareHouse) => (
            <div
              className="warehouseDetails__inventory--item"
              key={singleWareHouse.id}
            >
              <Link to={`/inventory/${singleWareHouse.itemName.toLowerCase()}`}>
                <div className="itemName">
                  {singleWareHouse.itemName} <ChevronRight />
                </div>
              </Link>
              <div className="itemCategory">{singleWareHouse.category}</div>
              <div
                className={
                  singleWareHouse.status === "In Stock"
                    ? "instock itemStatus"
                    : "outofstock itemStatus"
                }
              >
                {singleWareHouse.status}
              </div>
              <div className="itemQty">{singleWareHouse.quantity}</div>
              <div className="itemActions">
                <div className="deleteBtn">
                  <DeleteBtn />
                </div>
                <div className="editBtn">
                  <EditBtn />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WarehouseDetails
