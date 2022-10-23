import React, { useEffect, useState } from "react"
import { ReactComponent as TagsArrows } from "../../assets/icons/sort-24px.svg"
import { ReactComponent as ChevronRight } from "../../assets/icons/chevron_right-24px.svg"
import { ReactComponent as DeleteBtn } from "../../assets/icons/delete_outline-24px.svg"
import { ReactComponent as EditBtn } from "../../assets/icons/edit-24px.svg"
import { ReactComponent as EditBtnBlue } from "../../assets/icons/edit-24px-blue.svg"
import { ReactComponent as ArrowBack } from "../../assets/icons/arrow_back-24px.svg"
import "./WarehouseDetails.scss"

import { Link, useHistory, useParams } from "react-router-dom"
import axios from "axios"

function WarehouseDetails() {
  const { warehouseId } = useParams()
  const [inventoryData, setInventoryData] = useState([])
  const [warehouseData, setWarehouseData] = useState({})
  const history = useHistory()

  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehousedata/${warehouseId}`)
      .then((res) => {
        setWarehouseData(res.data)
      })
  }, [warehouseId])

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8080/inventory/${warehouseId}`,
    }).then((res) => {
      setInventoryData(res.data)
    })
  }, [warehouseId])
  return (
    <div className="warehouseDetails">
      <div className="warehouseDetails__header">
        <div className="warehouseDetails__name">
          <span
            className="warehouseDetails__name--icon"
            style={{ cursor: "pointer" }}
            onClick={history.goBack}
          >
            <ArrowBack />
          </span>
          <h1 className="warehouseDetails__name--heading">
            {warehouseData?.name}
          </h1>
        </div>
        <Link
          to={`/warehouse/edit/${warehouseData.name}`}
          className="warehouseDetails__button"
        >
          <EditBtn />
          <h3>Edit</h3>
        </Link>
      </div>
      {/*
      hardcoded info inside following section will be replaced with variables when fetched from the api
       */}
      <div className="warehouseDetails__info">
        <div className="warehouseDetails__info--address">
          <h3 className="label">WAREHOUSE ADDRESS:</h3>
          <p className="address">
            {warehouseData?.address}, {warehouseData?.city},{" "}
            {warehouseData?.country}
          </p>
        </div>
        <div className="warehouseDetails__contact">
          <div className="warehouseDetails__contact--name">
            <h3 className="label">CONTACT NAME:</h3>
            <p className="contactName">{warehouseData?.contact?.name}</p>
            <p className="contactPosition">
              {warehouseData?.contact?.position}
            </p>
          </div>
          <div className="warehouseDetails__contact--info">
            <h3 className="label">CONTACT INFORMATION:</h3>
            <p className="phoneNumber">{warehouseData?.contact?.phone}</p>
            <p className="email">{warehouseData?.contact?.email}</p>
          </div>
        </div>
      </div>
      {/*
      hardcoded info inside above section will be replaced with variables when fetched from the api
       */}
      <div className="warehouseDetails__inventory">
        <table>
          <thead>
            <tr className="warehouseDetails__inventory--tags">
              <th>
                <div className="tag">
                  INVENTORY ITEM <TagsArrows />
                </div>
              </th>
              <th>
                <div className="tag">
                  CATEGORY <TagsArrows />
                </div>
              </th>
              <th>
                <div className="tag">
                  STATUS <TagsArrows />
                </div>
              </th>
              <th>
                <div className="tag">
                  QTY <TagsArrows />
                </div>
              </th>
              <th>
                <div className="tag">
                  ACTIONS <TagsArrows />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {inventoryData?.map((singleWareHouse) => (
              <tr
                className="warehouseDetails__inventory--item"
                key={singleWareHouse?.id}
              >
                <td>
                  <Link
                    to={`/inventory/${
                      singleWareHouse?.warehouseID
                    }/${singleWareHouse?.itemName.toLowerCase()}`}
                  >
                    <h3 className="itemName">
                      {singleWareHouse?.itemName} <ChevronRight />
                    </h3>
                  </Link>
                </td>
                <td>
                  <div className="itemCategory">
                    {singleWareHouse?.category}
                  </div>
                </td>
                <td>
                  <div
                    className={
                      singleWareHouse?.status === "In Stock"
                        ? "instock itemStatus"
                        : "outofstock itemStatus"
                    }
                  >
                    {singleWareHouse?.status}
                  </div>
                </td>
                <td>
                  <div className="itemQty">{singleWareHouse?.quantity}</div>
                </td>
                <td>
                  <div className="itemActions">
                    <div className="deleteBtn">
                      <DeleteBtn />
                    </div>
                    <div className="editBtn">
                      <EditBtnBlue />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="warehouseDetails__inventory--items-mobile">
          {inventoryData?.map((singleWareHouse) => (
            <div
              className="warehouseDetails__inventory--item-mobile"
              key={singleWareHouse?.id}
            >
              <div className="itemLeft-container">
                <div className="tag-label">INVENTORY ITEM </div>
                <Link
                  to={`/inventory/${singleWareHouse?.itemName.toLowerCase()}`}
                >
                  <span className="link-container">
                    {singleWareHouse?.itemName} <ChevronRight />
                  </span>
                </Link>
                <div className="tag-label">CATEGORY </div>
                <div className="itemCategory-mobile">
                  {singleWareHouse?.category}
                </div>
                <div className="cta-mobile">
                  <DeleteBtn />
                </div>
              </div>
              <div className="itemRight-container">
                <div className="tag-label">STATUS </div>

                <div
                  className={
                    singleWareHouse?.status === "In Stock"
                      ? "stockStatus-mobile instock"
                      : "outofstock stockStatus-mobile"
                  }
                >
                  {singleWareHouse?.status}
                </div>

                <div className="tag-label">QTY </div>
                <div className="itemQty-mobile">
                  {singleWareHouse?.quantity}
                </div>
                <div className="cta-mobile" style={{ alignSelf: "flex-end" }}>
                  <EditBtnBlue />
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
