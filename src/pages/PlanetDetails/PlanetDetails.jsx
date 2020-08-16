import React from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';

import usePlanetDetails from '../../hooks/usePlanetDetails';
// TODO :
// ESTILIZAR E COLOCAR TODOS OS CAMPOS RESTANTES ( JA ESTA TRAZENDO DA API)

const PlanetDetails = () => {
  const { id } = useParams();
  const { loading, planetDetail } = usePlanetDetails(Number(id));
  console.log(`planetDetail`, planetDetail);

  return (
    <div>
      <strong>DETALHES DO PLANETA{id}</strong>

      {loading ? <Loader /> : <h1>{planetDetail.name}</h1>}
    </div>
  );
};

export default PlanetDetails;
