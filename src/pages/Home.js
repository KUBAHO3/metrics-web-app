import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { fetchApiData } from '../redux/metrics/metricsSlice';
import { fetchDetailData } from '../redux/details/detailsSlice';
import '../styles/Home.css';

function Home() {
  const dispatch = useDispatch();
  const { apiData, isLoading } = useSelector((store) => store.metrics);
  const [searchFilter, setSearchFilter] = useState('');
  const [searchResults, setSearchResults] = useState('');

  const searchItems = (searchValue) => {
    setSearchFilter(searchValue);
    if (searchFilter !== '') {
      const filteredData = apiData.filter((item) => Object.values(item.nameEU)
        .join('')
        .toLowerCase()
        .includes(searchFilter.toLowerCase()));
      setSearchResults(filteredData);
    } else {
      setSearchResults(apiData);
    }
  };

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  const clickHandler = (e, id) => {
    e.preventDefault();
    dispatch(fetchDetailData(id));
  };

  if (isLoading === true) {
    return (
      <h1 style={{ marginLeft: '40px' }}>Loading...</h1>
    );
  }

  return (
    <>
      <div className="metrics-container">
        <input
          className="search-input"
          type="text"
          placeholder="Type to search here"
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      <hr />
      <div className="metrics-container">
        {searchFilter.length > 1 ? (
          searchResults.map((item) => (
            <div key={item.id} className="metric-container">
              <div className="detail-button">
                <span role="button" tabIndex={0} id={item.id} onClick={(e) => clickHandler(e, item.id)} onKeyDown={(e) => clickHandler(e)}>
                  <Link to={`details/${item.id}`}>
                    {' '}
                    <FaRegArrowAltCircleRight />
                    {' '}
                  </Link>
                </span>
              </div>
              <div className="image-container"><img className="metric-image" src={item.imageUrl} alt={item.image_id} /></div>
              <div className="metric-about">
                <h3 className="metric-title">{item.nameEU}</h3>
                <h3 className="metric-numbers">{item.id}</h3>
              </div>
            </div>
          ))
        ) : (
          <div className="metrics-container">
            {apiData.map((item) => (
              <div key={item.id} className="metric-container">
                <div className="detail-button">
                  <span role="button" tabIndex={0} id={item.id} onClick={(e) => clickHandler(e, item.id)} onKeyDown={(e) => clickHandler(e)}>
                    <Link to={`details/${item.id}`}>
                      {' '}
                      <FaRegArrowAltCircleRight />
                      {' '}
                    </Link>
                  </span>
                </div>
                <div className="image-container"><img className="metric-image" src={item.imageUrl} alt={item.image_id} /></div>
                <div className="metric-about">
                  <h3 className="metric-title">{item.nameEU}</h3>
                  <h3 className="metric-numbers">{item.id}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
