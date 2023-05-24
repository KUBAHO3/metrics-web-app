import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailData } from '../redux/details/detailsSlice';
import '../styles/Detail.css';

function Detail() {
  const dispatch = useDispatch();
  const detailData = useSelector((store) => store.detailData.detailData);
  const loading = useSelector((store) => store.detailData.isLoading);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetailData(id));
  }, [dispatch, id]);

  if (loading === true) {
    return (
      <h1 style={{ marginLeft: '40px' }}>Loading...</h1>
    );
  }
  return (
    <>
      <div className="detailsContainer">
        <div className="imgContainer displays">
          <img className="detail-image" src={detailData.imageUrl} alt={detailData.image_id} />
        </div>
        <table>
          <tbody>

            <tr>
              <td>Piece code</td>
              <td>{detailData.id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{detailData.nameEU}</td>
            </tr>
            <tr>
              <td>Buying Price</td>
              <td>
                $
                {detailData.buyPrice}
              </td>
            </tr>
            <tr>
              <td>Selling Price</td>
              <td>
                $
                {detailData.sellPrice}
              </td>
            </tr>
            <tr>
              <td>Details</td>
              <td>{detailData.museumDesc}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Detail;
