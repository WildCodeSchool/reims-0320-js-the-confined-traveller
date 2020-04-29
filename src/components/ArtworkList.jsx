import React from 'react';
import { useParams } from 'react-router-dom';

const ArtworkList = () => {
  const { id } = useParams();

  return (
    <div>
      {id}
    </div>
  );
};

export default ArtworkList;
