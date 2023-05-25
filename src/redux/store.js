import { configureStore } from '@reduxjs/toolkit';
import metricsReducer from './metrics/metricsSlice';
import detailReducer from './details/detailsSlice';

const store = configureStore({
  reducer: {
    metrics: metricsReducer,
    detailData: detailReducer,
  },
});

export default store;
