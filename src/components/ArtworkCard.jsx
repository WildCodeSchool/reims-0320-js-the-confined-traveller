import React, { useEffect, useState } from 'react';
import './ArtworkCard.css';
import Axios from 'axios';


function ArtworkCard({ objectID }) {
  const [infos, setInfos] = useState(null);

  useEffect(() => {
    Axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`,
    )
      .then((response) => response.data)

      .then((data) => {
        setInfos(data);
      });
  }, [objectID]);


  return infos != null && (
    <div className="card-container">
      <div className="card-img-container">
        <img src={infos.primaryImage} alt={infos.title} />
      </div>
      <div className="card-desc-container">
        <div className="card-title">{infos.title}</div>
        <div className="card-object-date">
          Date :
          {' '}
          <span>{infos.objectDate}</span>
        </div>
        <div className="card-begin-date">
          Begin date :
          {' '}
          <span>{infos.objectBeginDate}</span>
        </div>
        <div className="card-end-date">
          End date :
          {' '}
          <span>{infos.objectEndDate}</span>
        </div>
        <div className="card-culture">
          Culture :
          {' '}
          <span>{infos.culture}</span>
        </div>
        <div className="card-country">
          Country :
          {' '}
          <span>{infos.country}</span>
        </div>
        <div className="card-region">
          Region :
          {' '}
          <span>{infos.region}</span>
        </div>
        <div className="card-accession-year">
          Year of accession :
          {' '}
          <span>{infos.accessionYear}</span>
        </div>
      </div>
    </div>
  );
}


export default ArtworkCard;
