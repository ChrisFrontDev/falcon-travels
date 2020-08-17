import React from 'react';
import { useHistory } from 'react-router-dom';
import { MdTerrain } from 'react-icons/md';
import { IoMdPlanet, IoMdPartlySunny } from 'react-icons/io';
import usePlanets from '../../hooks/usePlanets';
import Loader from '../../components/Loader/Loader';
import { Container, ListPlanet, PlanetCard, EpisodeTag } from './style';

const Home = () => {
  const { loading, planets, actualPage, setActualPage } = usePlanets();
  const history = useHistory();

  const handleNext = () => {
    setActualPage(actualPage + 1);
  };

  const handlePrev = () => {
    setActualPage(actualPage - 1);
  };

  const handleGoToPlanetDetails = idPlanet => {
    history.push(`/planets/${idPlanet}`);
  };

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <ListPlanet>
          {planets.planetList.map(planet => (
            <PlanetCard
              key={planet.id}
              onClick={() => handleGoToPlanetDetails(planet.id)}
            >
              <h2>{planet.name}</h2>
              <span>
                <MdTerrain />:{planet.terrain}
              </span>
              <p>
                <IoMdPlanet />:{planet.diameter} km
              </p>
              <p>
                <IoMdPartlySunny />:{planet.climate}
              </p>

              <p>Appear in Episodes:</p>
              {planet.films.length <= 0 ? (
                <p>No Information Given</p>
              ) : (
                <>
                  <div>
                    {planet.films.map(film => (
                      <EpisodeTag key={film.title}>
                        {film.episode_id}
                      </EpisodeTag>
                    ))}
                  </div>
                </>
              )}
            </PlanetCard>
          ))}
        </ListPlanet>
      )}

      <div>
        {planets.prev && !loading && (
          <button type="button" onClick={handlePrev}>
            Prev
          </button>
        )}

        {planets.next && !loading && (
          <button type="button" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </Container>
  );
};

export default Home;
