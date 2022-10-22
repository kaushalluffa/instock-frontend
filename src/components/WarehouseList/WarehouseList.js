import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./WarehouseList.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import addIcon from "../../assets/icons/add-svgrepo-com.svg";
import arrowUpDown from "../../assets/icons/noun-arrows-up-down-1979644.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import rightIcon from "../../assets/icons/chevron_right-24px.svg";
import axios from "axios";

function WarehouseList() {
  let location = useLocation();
  const [allWarehouses, setAllWarehouses] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/warehouses").then((res) => {
      setAllWarehouses(res.data);
    });
  }, []);
  return (
    <div className="wrh-lst-cont">
      <div className="wrh-lst-header">
        <div className="wrh-lst-header-h1">
          <h1>Warehouse</h1>
        </div>

        <div className="wrh-lst-header-search">
          <div className="search-container">
            <input
              type={"text"}
              className="search-inp"
              placeholder="Search.."
            />
            <img
              src={searchIcon}
              className="search-container-icon"
              alt="search-icon"
            />
          </div>

          <div className="btn-container">
            <button className="wrh-lst-btn">
              <img
                src={addIcon}
                className="list-header-add-icon"
                alt="search-btn"
              />
              Add New Warehouse
            </button>
          </div>
        </div>
      </div>

      <div className="wrh-lst-titles-cont">
        <div className="titleNames">
          <span>WAREHOUSE</span>
          <img src={arrowUpDown} className="arrow-up-down" alt="arrow" />
        </div>

        <div className="titleNames">
          <span>ADDRESS</span>
          <img src={arrowUpDown} className="arrow-up-down" alt="arrow" />
        </div>

        <div className="titleNames">
          <span>CONTACT NAME</span>
          <img src={arrowUpDown} className="arrow-up-down" alt="arrow" />
        </div>

        <div className="titleNames">
          <span>CONTACT INFORMATION</span>
          <img src={arrowUpDown} className="arrow-up-down" alt="arrow" />
        </div>

        <div className="titleNames title-action">
          <span>ACTIONS</span>
        </div>
      </div>

      {allWarehouses.map((warehouse) => (
        <div className="wrh-lst-items-cont" key={warehouse.id}>
          <div className="titleNames">
            <Link to={`/warehouse/${warehouse?.id}`}>
              <span className="link">
                {warehouse?.name}
                <img className="rightIcon" src={rightIcon} alt="right" />
              </span>
            </Link>
          </div>

          <div className="titleNames">
            <span>{warehouse?.address}</span>
          </div>

          <div className="titleNames">
            <span>{warehouse?.contact?.name}</span>
          </div>

          <div className="titleNames">
            <span>
              {warehouse?.contact?.phone}
              <br />
              {warehouse?.contact?.email}
            </span>
          </div>

          <div className="titleNames title-action">
            <Link
              to={{
                pathname: "/warehouse/delete/new york",
                state: { background: location },
              }}
            >
              <img src={deleteIcon} className="deleteIcon" alt="delete" />
            </Link>
            <img src={editIcon} className="editIcon" alt="edit" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default WarehouseList;
