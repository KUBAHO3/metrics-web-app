import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  detailData: {},
  isLoading: true,
};

export const fetchDetailData = createAsyncThunk(
  'metrics/detailData',
  async (id = 3) => {
    try {
      const response = await axios.get(`https://acnhapi.com/v1/art/${id}`);
      const {
        'buy-price': buyPrice, 'file-name': fileName, hasFake, image_uri: imageUrl, 'sell-price': sellPrice, 'museum-desc': museumDesc, name,
      } = response.data;
      const { 'name-EUen': nameEU } = name;

      const formatedData = {
        buyPrice,
        fileName,
        hasFake,
        imageUrl,
        museumDesc,
        sellPrice,
        name,
        nameEU,
      };

      return formatedData;
    } catch (error) {
      return error.message;
    }
  },
);

const detailDataSlice = createSlice({
  name: 'detailData',
  initialState,
  reducers: [],
  extraReducers: {
    [fetchDetailData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detailData = action.payload;
    },
    [fetchDetailData.rejected]: (state) => {
      state.isLoading = false;
    },
    [fetchDetailData.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export default detailDataSlice.reducer;
