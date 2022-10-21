import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './InventoryItemDetails.scss';
import editIcon from '../../assets/icons/edit-24px.svg';
import backArrow from '../../assets/icons/arrow_back-24px.svg';

export default function InventoryItemDetails() {
  let history = useHistory();
  // let location = useParams();

  //function that handles click on return button
  function back(e) {
    //prevent multiple clicks to bring the use further back into the route
    e.stopPropagation();
    //go back to the route in which this was called
    history.goBack();
  }

  return (
    <div className="item-detail">
      <div className="item-detail__header">
        <div className="item-detail__title-wrapper">
          <img
            onClick={back}
            className="item-detail__back-arrow"
            src={backArrow}
            alt="back arrow"
          />
          <h1 className="item-detail__title">Television</h1>
        </div>
        <div className="item-detail__edit-wrapper">
          <img
            className="item-detail__edit-icon"
            src={editIcon}
            alt="edit icon"
          />
        </div>
      </div>
      <div className="item-detail__card">
        <div className="item-detail__description-container">
          <h3 className="item-detail__label">ITEM DESCRIPTION:</h3>
          <p className="item-detail__text">
            This 50", 4K LED TV provides a crystal-clear picture and vivid
            colors.
          </p>
          <h3 className="item-detail__label">CATEGORY:</h3>
          <p className="item-detail__text">Electronics</p>
        </div>
        <div className="item-detail__status-container">
          <div className="item-detail__status-wrapper">
            <h3 className="item-detail__label">STATUS:</h3>
            <p className="item-detail__text">IN STOCK</p>
            <h3 className="item-detail__label">WAREHOUSE:</h3>
            <p className="item-detail__text">Manhattan</p>
          </div>
          <div className="item-detail__status-wrapper">
            <h3 className="item-detail__label">QUANTITY:</h3>
            <p className="item-detail__text">500</p>
          </div>
        </div>
      </div>
    </div>
  );
}
