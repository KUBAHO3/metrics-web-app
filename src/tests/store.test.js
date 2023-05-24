import { configureStore } from '@reduxjs/toolkit';
import metricsReducer from '../redux/metrics/metricsSlice';
import detailReducer from '../redux/details/detailsSlice';

describe('store', () => {
  test('should have metrics and detailData reducers', () => {
    const store = configureStore({
      reducer: {
        metrics: metricsReducer,
        detailData: detailReducer,
      },
    });
    expect(store.getState().metrics).toBeDefined();
    expect(store.getState().detailData).toBeDefined();
  });
});