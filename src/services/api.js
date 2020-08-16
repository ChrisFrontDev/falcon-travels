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
        id: uuidv4(),
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
