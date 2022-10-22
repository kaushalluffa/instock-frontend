import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./InventoryList.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px-blue.svg";
import rightIcon from "../../assets/icons/chevron_right-24px.svg";
import axios from "axios";

function InventoryList() {
  let item = useLocation();
  const [allInventories, setAllInventories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/inventories").then((res) => {
      setAllInventories(res.data);
    });
  }, []);
  return (
    <div className="invList">
      <div className="invList__container">
        <p className="invList__header">Inventory</p>
        <div className="invList__header--search">
          <section className="invList__header--searchbar">
            <input
              type={"text"}
              className="invList__search"
              placeholder="Search..."
            />
            <img
              src={searchIcon}
              className="invList__search--icon"
              alt="search-icon"
            />
          </section>
          <button className="invList__button">+ Add New Item</button>
        </div>
      </div>

      {/* wrap in container for mobile ---> display non for other breakpoint*/}
      <div className="invList__mobile">
        {allInventories.map((inventory) => (
          <div className="invList__items" key={inventory.id}>
            <div className="invList__items--info">
              <section className="invList__items--left">
                <p className="invList__items--title">INVENTORY ITEM</p>
                <p className="invList__items--item">
                  {inventory.itemName} <img src={rightIcon} />
                </p>
                <p className="invList__items--title">CATEGORY</p>
                <p className="invList__items--category">{inventory.category}</p>
              </section>
              <section className="invList__items--right">
                <p className="invList__items--title">STATUS</p>
                <p className="invList__items--instock">{inventory.status}</p>
                <p className="invList__items--title">QTY</p>
                <p className="invList__items--qty">{inventory.quantity}</p>
                <p className="invList__items--title">WAREHOUSE</p>
                <p className="invList__items--warehouse">
                  {inventory.warehouseName}
                </p>
              </section>
            </div>
            <section className="invList__items--icons">
              <button className="invList__items--button">
                <img src={deleteIcon} />
              </button>
              <button className="invList__items--button">
                <img src={editIcon} />
              </button>
            </section>
          </div>
        ))}
      </div>
      {/* create another contaiener for tablet and desktop ---> display none for mobile */}
      {/* <div>
        {allInventories.map((inventory) => (
          <div className="invList_items" key={inventory.id}>
            <div className="invList_items-info">
              <section className="invList_items-left">
                <p className="invList_items-title">INVENTORY ITEM</p>
                <p className="invList_items-item">
                  {inventory.itemName} <img src={rightIcon} />
                </p>
                <p className="invList_items-title">CATEGORY</p>
                <p className="invList_items-category">{inventory.category}</p>
              </section>
              <section className="invList_items-right">
                <p className="invList_items-title">STATUS</p>
                <p className="invList_items-instock">{inventory.status}</p>
                <p className="invList_items-title">QTY</p>
                <p className="invList_items-qty">{inventory.quantity}</p>
                <p className="invList_items-title">WAREHOUSE</p>
                <p className="invList_items-warehouse">
                  {inventory.warehouseName}
                </p>
              </section>
            </div>
            <section className="invList_items-icons">
              <button className="invList_items-button">
                <img src={deleteIcon} />
              </button>
              <button className="invList_items-button">
                <img src={editIcon} />
              </button>
            </section>
          </div>
        ))}
      </div> */}
    </div>
  );
}
export default InventoryList;
