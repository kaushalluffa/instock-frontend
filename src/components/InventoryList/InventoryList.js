import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./InventoryList.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px-blue.svg";
import rightIcon from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import axios from "axios";

function InventoryList() {
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
          <Link>
            <button className="invList__button">+ Add New Item</button>
          </Link>
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
              <Link>
                <button className="invList__items--button">
                  <img src={deleteIcon} />
                </button>
              </Link>
              <Link>
                <button className="invList__items--button">
                  <img src={editIcon} />
                </button>
              </Link>
            </section>
          </div>
        ))}
      </div>
      {/* create another contaiener for tablet and desktop ---> display none for mobile */}
      <div className="invList__mobile--hidden">
        <div className="invList__items--titles">
          <section className="invList__items--sort">
            <p className="invList__items--title">INVENTORY ITEM</p>
            <img src={sortIcon} />
          </section>
          <section className="invList__items--sort">
            <p className="invList__items--title">CATEGORY</p>
            <img src={sortIcon} />
          </section>
          <section className="invList__items--sort">
            <p className="invList__items--title">STATUS</p>
            <img src={sortIcon} />
          </section>
          <section className="invList__items--sort">
            <p className="invList__items--title">QTY</p>
            <img src={sortIcon} />
          </section>
          <section className="invList__items--sort">
            <p className="invList__items--title">WAREHOUSE</p>
            <img src={sortIcon} />
          </section>
          <section className="invList__items--sort">
            <p className="invList__items--title">ACTIONS</p>
            <img src={sortIcon} />
          </section>
        </div>
        {allInventories.map((inventory) => (
          <div className="invList__items" key={inventory.id}>
            <div className="invList__items--info">
              <p className="invList__items--item">
                {inventory.itemName} <img src={rightIcon} />
              </p>
              <p className="invList__items--category">{inventory.category}</p>
              <p className="invList__items--instock">{inventory.status}</p>
              <p className="invList__items--qty">{inventory.quantity}</p>
              <p className="invList__items--warehouse">
                {inventory.warehouseName}
              </p>
              <section className="invList__items--icons">
                <Link
                  to={{
                    pathname: "/inventory-item/delete",
                    // state: { background: item },
                  }}
                >
                  <button className="invList__items--button">
                    <img src={deleteIcon} />
                  </button>
                </Link>
                <Link to={`/inventory-item/edit${inventory.id}`}>
                  <button className="invList__items--button">
                    <img src={editIcon} />
                  </button>
                </Link>
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default InventoryList;
