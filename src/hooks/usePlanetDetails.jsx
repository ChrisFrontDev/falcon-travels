import { useState, useEffect } from 'react';
import { getSinglePlanet } from '../services/api';

export default function usePlanetDetails(planetId) {
  const [planetDetail, setPlanetDetail] = useState({
    name: null,
    rotation_period: null,
    orbital_period: null,
    diameter: null,
    climate: null,
    gravity: null,
    terrain: null,
    surface_water: null,
    population: null,
    residents: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const planetData = await getSinglePlanet(planetId);
      console.log('HHOOK', planetData);
      if (mounted) {
        setPlanetDetail(planetData);
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, [planetId]);

  return {
    loading,
    planetDetail,
  };
}
