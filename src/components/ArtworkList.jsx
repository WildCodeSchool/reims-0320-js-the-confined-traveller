import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import ArtworkCard from './ArtworkCard';

const ArtworkList = () => {
  const { id, keyword = 'cat' } = useParams();

  const [objectIDs, setObjectIDs] = useState([]);

  useEffect(() => {
    Axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${id}&q=${keyword}`)
      .then((response) => response.data)
      .then((data) => {
        setObjectIDs(data.objectIDs != null ? data.objectIDs.slice(0, 9) : []);
      });
  }, [id]);

  return (
    <div>
      {objectIDs.map((objectID) => (
        <ArtworkCard objectID={objectID} />
      ))}
    </div>
  );
};

export default ArtworkList;
