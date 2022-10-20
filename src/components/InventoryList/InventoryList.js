import React from "react";
import "./InventoryList.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px-blue.svg";
import rightIcon from "../../assets/icons/chevron_right-24px.svg";

function InventoryList() {
  return (
    <div className="invList">
      <div className="invList_container">
        <p className="invList_header">Inventory</p>
        <section className="invList_header-search">
          <input
            type={"text"}
            className="invList_search"
            placeholder="Search..."
          />
          <img
            src={searchIcon}
            className="invList_search-icon"
            alt="search-icon"
          />
        </section>
        <button className="invList_button">+ Add New Item</button>
      </div>

      {/* Inventory Item 1 */}
      <div className="invList_items">
        <div className="invList_items-info">
          <section className="invList_items-left">
            <p>INVENTORY ITEM</p>
            <p>CATEGORY</p>
          </section>
          <section className="invList_items-right">
            <p>STATUS</p>
            <p>QTY</p>
            <p>WAREHOUSE</p>
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

      {/* Inventory Item 2 */}
      <div className="invList_items">
        <div className="invList_items-info">
          <section className="invList_items-left">
            <p>INVENTORY ITEM</p>
            <p>CATEGORY</p>
          </section>
          <section className="invList_items-right">
            <p>STATUS</p>
            <p>QTY</p>
            <p>WAREHOUSE</p>
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

      {/* Inventory Item 3 */}
      <div className="invList_items">
        <div className="invList_items-info">
          <section className="invList_items-left">
            <p>INVENTORY ITEM</p>
            <p>CATEGORY</p>
          </section>
          <section className="invList_items-right">
            <p>STATUS</p>
            <p>QTY</p>
            <p>WAREHOUSE</p>
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

      {/* Inventory Item 4 */}
      <div className="invList_items">
        <div className="invList_items-info">
          <section className="invList_items-left">
            <p>INVENTORY ITEM</p>
            <p>CATEGORY</p>
          </section>
          <section className="invList_items-right">
            <p>STATUS</p>
            <p>QTY</p>
            <p>WAREHOUSE</p>
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

      {/* Inventory Item 5 */}
      <div className="invList_items">
        <div className="invList_items-info">
          <section className="invList_items-left">
            <p>INVENTORY ITEM</p>
            <p>CATEGORY</p>
          </section>
          <section className="invList_items-right">
            <p>STATUS</p>
            <p>QTY</p>
            <p>WAREHOUSE</p>
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

      {/* Inventory Item 6 */}
      <div className="invList_items">
        <div className="invList_items-info">
          <section className="invList_items-left">
            <p>INVENTORY ITEM</p>
            <p>CATEGORY</p>
          </section>
          <section className="invList_items-right">
            <p>STATUS</p>
            <p>QTY</p>
            <p>WAREHOUSE</p>
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

      {/* Inventory Item 7 */}
      <div className="invList_items">
        <div className="invList_items-info">
          <section className="invList_items-left">
            <p>INVENTORY ITEM</p>
            <p>CATEGORY</p>
          </section>
          <section className="invList_items-right">
            <p>STATUS</p>
            <p>QTY</p>
            <p>WAREHOUSE</p>
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

      {/* Inventory Item 8 */}
      <div className="invList_items">
        <div className="invList_items-info">
          <section className="invList_items-left">
            <p>INVENTORY ITEM</p>
            <p>CATEGORY</p>
          </section>
          <section className="invList_items-right">
            <p>STATUS</p>
            <p>QTY</p>
            <p>WAREHOUSE</p>
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
    </div>
  );
}
export default InventoryList;
