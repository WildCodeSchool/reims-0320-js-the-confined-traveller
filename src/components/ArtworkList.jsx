import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const ArtworkList = () => {
  const { id } = useParams();
  const [iD, setID] = useState([]);


  useEffect(() => {
    if (iD != null) {
      Axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${id}&q=cat`)
        .then((response) => response.data)
        .then((data) => {
          setID(data.objectIDs != null ? data.objectIDs : []);
        });
    }
  }, [id]);

  return (
    <div>
      {iD.map((iD) => (<p>{iD}</p>))}
    </div>
  );
};

export default ArtworkList;
