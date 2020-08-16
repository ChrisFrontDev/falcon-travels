import { useState, useEffect } from 'react';

import { getAllPlanets } from '../services/api';

export default function usePlanets() {
  const [planets, setPlanets] = useState({});
  const [loading, setLoading] = useState(true);
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setLoading(true);
      const response = await getAllPlanets(actualPage);
      if (mounted) {
        setPlanets(response);
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, [actualPage]);

  return {
    loading,
    planets,
    actualPage,
    setActualPage,
  };
}
