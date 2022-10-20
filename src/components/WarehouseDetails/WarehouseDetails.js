import React, { useEffect, useState } from "react";
import { ReactComponent as TagsArrows } from "../../assets/icons/sort-24px.svg";
import { ReactComponent as ChevronRight } from "../../assets/icons/chevron_right-24px.svg";
import { ReactComponent as DeleteBtn } from "../../assets/icons/delete_outline-24px.svg";
import { ReactComponent as EditBtn } from "../../assets/icons/edit-24px.svg";
import { ReactComponent as EditBtnBlue } from "../../assets/icons/edit-24px-blue.svg";
import { ReactComponent as ArrowBack } from "../../assets/icons/arrow_back-24px.svg";
import "./WarehousDetails.scss";

import { Link, useParams } from "react-router-dom";
import axios from "axios";

function WarehouseDetails() {
  const { location } = useParams();
  const [warehouseData, setWarehouseData] = useState([]);
  const warehouseID = "2922c286-16cd-4d43-ab98-c79f698aeab0";
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8080/inventory/${warehouseID}`,
    }).then((res) => {
      setWarehouseData(res.data);
    });
  }, []);
  return (
    <div className="warehouseDetails">
      <div className="warehouseDetails__header">
        <div className="warehouseDetails__name">
          <span className="warehouseDetails__name--icon">
            <ArrowBack />
          </span>
          <h1 className="warehouseDetails__name--heading">
            {warehouseData[0]?.warehouseName}
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
            {warehouseData.map((singleWareHouse) => (
              <tr
                className="warehouseDetails__inventory--item"
                key={singleWareHouse.id}
              >
                <td>
                  <Link
                    to={`/inventory/${singleWareHouse.itemName.toLowerCase()}`}
                  >
                    <div className="itemName">
                      {singleWareHouse.itemName} <ChevronRight />
                    </div>
                  </Link>
                </td>
                <td>
                  <div className="itemCategory">{singleWareHouse.category}</div>
                </td>
                <td>
                  <div
                    className={
                      singleWareHouse.status === "In Stock"
                        ? "instock itemStatus"
                        : "outofstock itemStatus"
                    }
                  >
                    {singleWareHouse.status}
                  </div>
                </td>
                <td>
                  <div className="itemQty">{singleWareHouse.quantity}</div>
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
          {warehouseData.map((singleWareHouse) => (
            <div
              className="warehouseDetails__inventory--item-mobile"
              key={singleWareHouse.id}
            >
              <div className="itemLeft-container">
                <div className="tag-label">INVENTORY ITEM </div>
                <Link
                  to={`/inventory/${singleWareHouse.itemName.toLowerCase()}`}
                >
                  <span className="link-container">
                    {singleWareHouse.itemName} <ChevronRight />
                  </span>
                </Link>
                <div className="tag-label">CATEGORY </div>
                <div className="itemCategory-mobile">
                  {singleWareHouse.category}
                </div>
                <div className="cta-mobile">
                  <DeleteBtn />
                </div>
              </div>
              <div className="itemRight-container">
                <div className="tag-label">STATUS </div>

                <div
                  className={
                    singleWareHouse.status === "In Stock"
                      ? "stockStatus-mobile instock"
                      : "outofstock stockStatus-mobile"
                  }
                >
                  {singleWareHouse.status}
                </div>

                <div className="tag-label">QTY </div>
                <div className="itemQty-mobile">{singleWareHouse.quantity}</div>
                <div className="cta-mobile" style={{ alignSelf: "flex-end" }}>
                  <EditBtnBlue />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WarehouseDetails;
