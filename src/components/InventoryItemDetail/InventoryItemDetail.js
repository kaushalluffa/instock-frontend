import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './InventoryItemDetails.scss';
import editIcon from '../../assets/icons/edit-24px.svg';
import backArrow from '../../assets/icons/arrow_back-24px.svg';

export default function InventoryItemDetails() {
  let history = useHistory();
  let location = useParams();
  console.log(location);
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
            // will add onClick event for opening the edit details
            className="item-detail__edit-icon"
            src={editIcon}
            alt="edit icon"
          />
        </div>
      </div>
      <div className="item-detail__card">
        <div className="item-detail__description-container">
          <h4 className="item-detail__label">ITEM DESCRIPTION:</h4>
          <p className="item-detail__text">
            This 50", 4K LED TV provides a crystal-clear picture and vivid
            colors.
          </p>
          <h4 className="item-detail__label item-detail__label--gap">
            CATEGORY:
          </h4>
          <p className="item-detail__text">Electronics</p>
        </div>
        <div className="item-detail__status-container">
          <div className="item-detail__wrapper">
            <h4 className="item-detail__label">STATUS:</h4>
            <p className="item-detail__text item-detail__text--in-stock">
              IN STOCK
            </p>
            <h4 className="item-detail__label  item-detail__label--gap">
              WAREHOUSE:
            </h4>
            <p className="item-detail__text">Manhattan</p>
          </div>
          <div className="item-detail__wrapper">
            <h4 className="item-detail__label">QUANTITY:</h4>
            <p className="item-detail__text">500</p>
          </div>
        </div>
      </div>
    </div>
  );
}
