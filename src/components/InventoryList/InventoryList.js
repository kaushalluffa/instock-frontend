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
            <p className="invList_items-title">INVENTORY ITEM</p>
            <p className="invList_items-item">
              Television <img src={rightIcon} />
            </p>
            <p className="invList_items-title">CATEGORY</p>
            <p className="invList_items-category">Electronics</p>
          </section>
          <section className="invList_items-right">
            <p className="invList_items-title">STATUS</p>
            <p className="invList_items-instock">IN STOCK</p>
            <p className="invList_items-title">QTY</p>
            <p className="invList_items-qty">500</p>
            <p className="invList_items-title">WAREHOUSE</p>
            <p className="invList_items-warehouse">Manhattan</p>
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
            <p className="invList_items-title">INVENTORY ITEM</p>
            <p className="invList_items-item">
              Gym Bag <img src={rightIcon} />
            </p>
            <p className="invList_items-title">CATEGORY</p>
            <p className="invList_items-category">Gear</p>
          </section>
          <section className="invList_items-right">
            <p className="invList_items-title">STATUS</p>
            <p className="invList_items-outstock">OUT OF STOCK</p>
            <p className="invList_items-title">QTY</p>
            <p className="invList_items-qty">0</p>
            <p className="invList_items-title">WAREHOUSE</p>
            <p className="invList_items-warehouse">Manhattan</p>
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
            <p className="invList_items-title">INVENTORY ITEM</p>
            <p className="invList_items-item">
              Hoodie <img src={rightIcon} />
            </p>
            <p className="invList_items-title">CATEGORY</p>
            <p className="invList_items-category">Apparel</p>
          </section>
          <section className="invList_items-right">
            <p className="invList_items-title">STATUS</p>
            <p className="invList_items-outstock">OUT OF STOCK</p>
            <p className="invList_items-title">QTY</p>
            <p className="invList_items-qty">0</p>
            <p className="invList_items-title">WAREHOUSE</p>
            <p className="invList_items-warehouse">Manhattan</p>
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
            <p className="invList_items-title">INVENTORY ITEM</p>
            <p className="invList_items-item">
              Keychain <img src={rightIcon} />
            </p>
            <p className="invList_items-title">CATEGORY</p>
            <p className="invList_items-category">Accessories</p>
          </section>
          <section className="invList_items-right">
            <p className="invList_items-title">STATUS</p>
            <p className="invList_items-instock">IN STOCK</p>
            <p className="invList_items-title">QTY</p>
            <p className="invList_items-qty">2000</p>
            <p className="invList_items-title">WAREHOUSE</p>
            <p className="invList_items-warehouse">Manhattan</p>
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
            <p className="invList_items-title">INVENTORY ITEM</p>
            <p className="invList_items-item">
              Shampoo <img src={rightIcon} />
            </p>
            <p className="invList_items-title">CATEGORY</p>
            <p className="invList_items-category">Health</p>
          </section>
          <section className="invList_items-right">
            <p className="invList_items-title">STATUS</p>
            <p className="invList_items-instock">IN STOCK</p>
            <p className="invList_items-title">QTY</p>
            <p className="invList_items-qty">4350</p>
            <p className="invList_items-title">WAREHOUSE</p>
            <p className="invList_items-warehouse">Manhattan</p>
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
            <p className="invList_items-title">INVENTORY ITEM</p>
            <p className="invList_items-item">
              Phone Charger <img src={rightIcon} />
            </p>
            <p className="invList_items-title">CATEGORY</p>
            <p className="invList_items-category">Electronics</p>
          </section>
          <section className="invList_items-right">
            <p className="invList_items-title">STATUS</p>
            <p className="invList_items-instock">IN STOCK</p>
            <p className="invList_items-title">QTY</p>
            <p className="invList_items-qty">10000</p>
            <p className="invList_items-title">WAREHOUSE</p>
            <p className="invList_items-warehouse">Manhattan</p>
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
            <p className="invList_items-title">INVENTORY ITEM</p>
            <p className="invList_items-item">
              Tent <img src={rightIcon} />
            </p>
            <p className="invList_items-title">CATEGORY</p>
            <p className="invList_items-category">Gear</p>
          </section>
          <section className="invList_items-right">
            <p className="invList_items-title">STATUS</p>
            <p className="invList_items-instock">IN STOCK</p>
            <p className="invList_items-title">QTY</p>
            <p className="invList_items-qty">800</p>
            <p className="invList_items-title">WAREHOUSE</p>
            <p className="invList_items-warehouse">Manhattan</p>
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
            <p className="invList_items-title">INVENTORY ITEM</p>
            <p className="invList_items-item">
              Winter Jacket <img src={rightIcon} />
            </p>
            <p className="invList_items-title">CATEGORY</p>
            <p className="invList_items-category">Apparel</p>
          </section>
          <section className="invList_items-right">
            <p className="invList_items-title">STATUS</p>
            <p className="invList_items-outstock">OUT OF STOCK</p>
            <p className="invList_items-title">QTY</p>
            <p className="invList_items-qty">0</p>
            <p className="invList_items-title">WAREHOUSE</p>
            <p className="invList_items-warehouse">Manhattan</p>
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
