import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailData } from '../redux/details/detailsSlice';

function Detail() {
  const dispatch = useDispatch();
  const detailData = useSelector((store) => store.detailData.detailData);
  const loading = useSelector((store) => store.detailData.isLoading);

  useEffect(() => {
    dispatch(fetchDetailData());
  }, [dispatch]);

  if (loading === true) {
    return (
      <h1 style={{ marginLeft: '40px' }}>Loading...</h1>
    );
  }
  return (
    <div>{JSON.stringify(detailData)}</div>
  );
}

export default Detail;
