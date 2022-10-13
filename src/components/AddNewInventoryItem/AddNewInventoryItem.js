import React from 'react'
import {ReactComponent as ArrowBack} from '../../assets/icons/arrow_back-24px.svg'
import './AddNewInventoryItem.scss'

const AddNewInventoryItem = () => {
  return (
    <div className="addNewItem">
      <div className="addNewItem__header">
        <div className="warehouseDetails__name">
          <span className="warehouseDetails__name--icon">
            <ArrowBack/>
          </span>
          <h1 className="warehouseDetails__name--heading">
            Add New Inventory Item
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AddNewInventoryItem