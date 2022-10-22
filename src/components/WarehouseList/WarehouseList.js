import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './WarehouseList.scss';
import searchIcon from '../../assets/icons/search-24px.svg';
import arrowUpDown from '../../assets/icons/noun-arrows-up-down-1979644.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px-blue.svg';
import rightIcon from '../../assets/icons/chevron_right-24px.svg';
import axios from 'axios';

export default function WarehouseList() {
  let location = useLocation();

  const [allWarehouses, setAllWarehouses] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/warehouses').then((res) => {
      setAllWarehouses(res.data);
    });
  }, []);

  return (
    <div className="warehouses-list">
      <div className="warehouses-list__header">
        <h1 className="warehouses-list__title">Warehouses</h1>
        <div className="warehouses-list__search-container">
          <input
            type={'text'}
            className="warehouses-list__search-input"
            placeholder="Search.."
          />
          <img
            src={searchIcon}
            className="warehouses-list__search-icon"
            alt="search-icon"
          />
        </div>
        <div className="warehouses-list__btn">
          <p className="warehouses-list__btn-txt">+ Add New Warehouse</p>
        </div>
      </div>
      <div className="warehouses-list__table-container">
        <div className="warehouses-list__table-header">
          <div className="warehouses-list__table-title">
            <span>WAREHOUSE</span>
            <img
              src={arrowUpDown}
              className="warehouses-list__arrow-up-down"
              alt="arrow"
            />
          </div>

          <div className="warehouses-list__table-title">
            <span>ADDRESS</span>
            <img
              src={arrowUpDown}
              className="warehouses-list__arrow-up-down"
              alt="arrow"
            />
          </div>

          <div className="warehouses-list__table-title">
            <span>CONTACT NAME</span>
            <img
              src={arrowUpDown}
              className="warehouses-list__arrow-up-down"
              alt="arrow"
            />
          </div>
          <div className="warehouses-list__table-title">
            <span>CONTACT INFORMATION</span>
            <img
              src={arrowUpDown}
              className="warehouses-list__arrow-up-down"
              alt="arrow"
            />
          </div>
          <div className="warehouses-list__table-title warehouses-list__table-title--action">
            <span>ACTIONS</span>
          </div>
        </div>
        <div className="warehouses-list__table-body">
          {allWarehouses.map((warehouse) => (
            <div
              className="warehouses-list__warehouse-container"
              key={warehouse.id}>
              <div className="warehouses-list__table-wrapper">
                <div className="warehouses-list__item-container">
                  <h4 className="warehouses-list__item-label">WAREHOUSE</h4>
                  <Link to={`/warehouse/${warehouse?.id}`}>
                    <p className="warehouses-list__item-link">
                      {warehouse?.name}
                      <img
                        src={rightIcon}
                        className="warehouses-list__right-icon"
                        alt="right arrow"
                      />
                    </p>
                  </Link>
                </div>
                <div className="warehouses-list__item-container">
                  <h4 className="warehouses-list__item-label">ADDRESS</h4>
                  <p className="warehouses-list__item-txt">
                    {warehouse?.address}
                  </p>
                  <p className="warehouses-list__item-txt warehouses-list__item-txt--blank">
                    DUMMY
                  </p>
                </div>
                <Link
                  to={{
                    pathname:
                      '/warehouse/delete/' + warehouse?.name.toLowerCase(),
                    state: { background: location },
                  }}>
                  <img
                    src={deleteIcon}
                    className="warehouses-list__delete-icon"
                    alt="delete icon"
                  />
                </Link>
              </div>
              <div className="warehouses-list__table-wrapper">
                <div className="warehouses-list__item-container">
                  <h4 className="warehouses-list__item-label">CONTACT NAME</h4>
                  <p className="warehouses-list__item-txt">
                    {warehouse?.contact?.name}
                  </p>
                </div>
                <div className="warehouses-list__item-container">
                  <h4 className="warehouses-list__item-label">
                    CONTACT INFORMATION
                  </h4>
                  <p className="warehouses-list__item-txt">
                    {warehouse?.contact?.phone}
                    <br /> {warehouse?.contact?.email}
                  </p>
                </div>
                <img
                  src={editIcon}
                  className="warehouses-list__edit-icon"
                  alt="edit icon"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
