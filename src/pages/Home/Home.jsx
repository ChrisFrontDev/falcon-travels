import React from 'react';
import usePlanets from '../../hooks/usePlanets';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const { loading, planets, actualPage, setActualPage } = usePlanets();

  const handleNext = () => {
    setActualPage(actualPage + 1);
  };

  const handlePrev = () => {
    setActualPage(actualPage - 1);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        planets.planetList.map(planet => <h1 key={planet.id}>{planet.name}</h1>)
      )}

      {planets.prev && (
        <button type="button" onClick={handlePrev}>
          Prev
        </button>
      )}

      {planets.next && (
        <button type="button" onClick={handleNext}>
          Next
        </button>
      )}
    </>
  );
};

export default Home;
