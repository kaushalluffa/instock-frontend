import React from "react";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import Edit from "../../assets/icons/edit-24px.svg";
import { ReactComponent as TagsArrows } from "../../assets/icons/sort-24px.svg";
import { ReactComponent as ChevronRight } from "../../assets/icons/chevron_right-24px.svg";
import { ReactComponent as DeleteBtn } from "../../assets/icons/delete_outline-24px.svg";
import { ReactComponent as EditBtn } from "../../assets/icons/edit-24px.svg";
import "./WarehousDetails.scss";
function WarehouseDetails({ name }) {
  return (
    <div className="warehouseDetails">
      <div className="warehouseDetails__header">
        <div className="warehouseDetails__name">
          <span className="warehouseDetails__name--icon">
            <img src={ArrowBack} alt="icon" />
          </span>
          {/* <span>{name}</span> */}
          <h1>Name</h1>
        </div>
        <div className="warehouseDetails__button">
          <span className="warehouseDetails__button--icon">
            <img src={Edit} alt="icon" />
          </span>
          <span>Edit</span>
        </div>
      </div>
      <div className="warehouseDetails__info">
        <div className="warehouseDetails__info--address">
          <p className="label">WAREHOUSE ADDRESS:</p>
          <p className="address">33 Pearl Street SW, Washington, USA</p>
        </div>
        <div className="warehouseDetails__contact">
          <div className="warehouseDetails__contact--name">
            <p className="label">CONTACT NAME:</p>
            <p className="contactName">Graeme Lyon</p>
            <p className="contactPosition">Warehouse Manager</p>
          </div>
          <div className="warehouseDetails__contact--info">
            <p className="label">CONTACT INFORMATION:</p>
            <p className="phoneNumber">{`+1 (647)504-0911`}</p>
            <p className="email">glyon@instock.com</p>
          </div>
        </div>
      </div>
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
          <div className="warehouseDetails__inventory--item">
            <div className="itemName">
              Television <ChevronRight />
            </div>
            <div className="itemCategory">
              Electronics
            </div>
            <div className="itemStatus">
              IN STOCK
            </div>
            <div className="itemQty">
              500
            </div>
            <div className="itemActions">
              <div className="deleteBtn"><DeleteBtn/></div>
              <div className="editBtn"><EditBtn/></div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDetails;
