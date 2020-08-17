import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  width: 100%;
  align-items: center;

  h2 {
    margin-bottom: 6px;
  }
`;

export const ListPlanet = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PlanetCard = styled.div`
  margin: 12px 12px;
  padding: 10px 14px;
  width: 280px;

  border-radius: 8px;
  background-color: #404146;

  div {
    display: flex;
  }
  p {
    display: flex;
  }
`;

export const EpisodeTag = styled.span`
  padding: 2px 8px 0px 8px;
  border-radius: 8px;
  border: 1px solid white;
`;
