import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../redux/metrics/metricsSlice';

function Home() {
  const dispatch = useDispatch();
  const metrics = useSelector((store) => store.metrics.apiData);
  const loading = useSelector((store) => store.metrics.isLoading);

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  if (loading === false) {
    return (
      <h1 style={{ marginLeft: '40px' }}>Loading...</h1>
    );
  }

  return (
    <div>{JSON.stringify(metrics[2])}</div>
  );
}

export default Home;
