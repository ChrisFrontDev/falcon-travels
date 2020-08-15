import React from 'react';
import { useParams } from 'react-router-dom';

const PlanetDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <strong>DETALHES DO PLANETA{id}</strong>
    </div>
  );
};

export default PlanetDetails;
