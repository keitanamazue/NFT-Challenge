import React from "react";
import "./CollectionCard.css";

const CollectionCard = ({ id, image_original_url, traits, name }) => {
  return (
    <div className="cardContainer">
      <div className="cardImg">
        <img src={image_original_url} alt="" />
      </div>
      <div className="cardInfo">
        <h2 className="cardTitle">{name}</h2>
        <p className="cardId">・#{id}</p>
        <div className="cardPrice">
          <img src="/weth.png" alt="" />
          <p>{traits[0]?.value}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
