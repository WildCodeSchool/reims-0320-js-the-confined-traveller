import React from "react";
import "./ArtworkCard.css";

function ArtworkCard({ infosCards }) {
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img src={infosCards.primaryImage} alt={infosCards.title} />
      </div>
      <div className="card-desc-container">
        <div className="card-title">{infosCards.title}</div>
        <div className="card-object-date">
          Date : <span>{infosCards.objectDate}</span>
        </div>
        <div className="card-begin-date">
          Begin date : <span>{infosCards.objectBeginDate}</span>
        </div>
        <div className="card-end-date">
          End date : <span>{infosCards.objectEndDate}</span>
        </div>
        <div className="card-culture">
          Culture : <span>{infosCards.culture}</span>
        </div>
        <div className="card-country">
          Country : <span>{infosCards.country}</span>
        </div>
        <div className="card-region">
          Region : <span>{infosCards.region}</span>
        </div>
        <div className="card-accession-year">
          Year of accession : <span>{infosCards.accessionYear}</span>
        </div>
      </div>
    </div>
  );
}

export default ArtworkCard;
