import { v4 as uuidv4 } from 'uuid';

const API_URL = 'https://swapi.dev/api/planets/';

// TODO
// lista somente dos planetas:
// ■ Nome do planeta X
// ■ Terreno X
// ■ Diametro X
// ■ Clima X
// ■ Filmes em que aparece, com: X

export const getAllPlanets = async (page = 1) => {
  const res = await fetch(`${API_URL}?page=${page}`);

  const resJson = await res.json();

  const planetList = await Promise.all(
    await resJson.results.map(async planet => {
      const planetFilms = await Promise.all(
        planet.films.map(async filmUrl => {
          const filmResponse = await fetch(filmUrl);

          return filmResponse.json();
        }),
      );

      const planetWithFilms = {
        id:
          resJson.results
            .map(function (e) {
              return e.name;
            })
            .indexOf(planet.name) + 1,
        name: planet.name,
        terrain: planet.terrain,
        diameter: planet.diameter,
        climate: planet.climate,
        films: planetFilms,
      };

      return planetWithFilms;
    }),
  );

  const data = { planetList, prev: resJson.previous, next: resJson.next };

  return data;
};

export const getSinglePlanet = async id => {
  const res = await fetch(`${API_URL}${id}/`);

  const resPlanetJson = await res.json();

  const planetResidents = await Promise.all(
    resPlanetJson.residents.map(async residentUrl => {
      const residentResponse = await fetch(residentUrl);

      return residentResponse.json();
    }),
  );

  const residents = await Promise.all(
    await planetResidents.map(async planetResident => {
      const planetResidentVehicles = await Promise.all(
        planetResident.vehicles.map(async vehicleUrl => {
          const vehicleResponse = await fetch(vehicleUrl);

          return vehicleResponse.json();
        }),
      );

      const planetResidentSpecies = await Promise.all(
        planetResident.species.map(async specieUrl => {
          const specieResponse = await fetch(specieUrl);

          return specieResponse.json();
        }),
      );

      const planetWithVehicles = {
        id: uuidv4(),
        ...planetResident,
        vehicles: planetResidentVehicles,
        species: planetResidentSpecies,
      };

      return planetWithVehicles;
    }),
  );

  const planet = { ...resPlanetJson, residents };

  console.log(planet);
  return planet;
};
