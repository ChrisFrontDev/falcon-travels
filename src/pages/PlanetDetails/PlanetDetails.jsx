import React from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';

import usePlanetDetails from '../../hooks/usePlanetDetails';

import { Container, ResidentCards, ResidentList, PlanetInfo } from './style';

const PlanetDetails = () => {
  const { id } = useParams();
  const { loading, planetDetail } = usePlanetDetails(id);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PlanetInfo>
            <h1>{planetDetail.name}</h1>

            <p>Rotation period: {planetDetail.rotation_period} h</p>
            <p>Orbital period: {planetDetail.orbital_period} days</p>
            <p>Diameter: {planetDetail.diameter}</p>
            <p>Climate: {planetDetail.climate}</p>
            <p>Gravity: {planetDetail.gravity}</p>
            <p>Terrain: {planetDetail.terrain}</p>
            <p>Population: {planetDetail.population}</p>
          </PlanetInfo>
          <ResidentList>
            <h2>Residents:</h2>
            {planetDetail.residents.map(resident => (
              <ResidentCards key={resident.id}>
                <h3>{resident.name}</h3>
                <p>Hair Color: {resident.hair_color}</p>
                <p>Eyer Color: {resident.eye_color}</p>
                <p>Gender: {resident.gender}</p>
                <div>
                  vehicles:
                  {resident.vehicles.map(vehicle => (
                    <p key={vehicle.name}>{vehicle.name}</p>
                  ))}
                </div>
              </ResidentCards>
            ))}
          </ResidentList>
        </>
      )}
    </Container>
  );
};

export default PlanetDetails;
// TODO :
// ESTILIZAR E COLOCAR TODOS OS CAMPOS RESTANTES ( JA ESTA TRAZENDO DA API)
// Nome do planeta X
// ■ Periodo de rotação X
// ■ Periodo de orbitação x
// ■ Diametro x
// ■ Clima x
// ■ Gravidade
// ■ Terreno
// ■ População
// ■ Lista de nativos com:
//    ■ Nome
//    ■ Cor do cabelo
//    ■ Cor dos olhos
//    ■ Gênero
//    ■ Espécie(s), contendo:
//        ○ Nome
//    ■ Veículo(s), contendo:
//        ○ Nome
//        ○ Modelo
