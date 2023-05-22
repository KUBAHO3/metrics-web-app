import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://acnhapi.com/v1a/art';

const initialState = {
  apiData: [],
  isloading: true,
};

export const fetchApiData = createAsyncThunk(
  'metrics/webapp/fetchApiData',
  async () => {
    try {
      const response = await axios.get(URL);
      const data = [];

      response.data.forEach((obj) => {
        const {
          'buy-price': buyPrice, 'file-name': fileName, hasFake, id, image_uri: imageUrl, 'museum-desc': museumDesc, name,
        } = obj;
        const { 'name-EUen': nameEU } = name;

        const formatedData = {
          buyPrice,
          fileName,
          hasFake,
          id,
          imageUrl,
          museumDesc,
          nameEU,
        };

        data.push(formatedData);
      });
      return data;
    } catch (error) {
      return error;
    }
  },
);

const metricsSlice = createSlice({
  name: 'petsData',
  initialState,
  reducers: [],
  extraReducers: {
    [fetchApiData.fulfilled]: (state, action) => {
      state.isloading = false;
      state.apiData = action.payload;
    },
    [fetchApiData.rejected]: (state) => {
      state.isloading = false;
    },
    [fetchApiData.pending]: (state) => {
      state.isloading = true;
    },
  },
});

export default metricsSlice.reducer;
