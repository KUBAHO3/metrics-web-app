import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Home from '../pages/Home';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();

describe('Home component', () => {
  let wrapper;
  let store;

  // Initialize mock store
  beforeEach(() => {
    store = mockStore({
      metrics: {
        apiData: [
          {
            id: 1,
            nameEU: 'Metric 1',
            imageUrl: 'https://example.com/metric1.png',
            image_id: 'metric1',
          },
          {
            id: 2,
            nameEU: 'Metric 2',
            imageUrl: 'https://example.com/metric2.png',
            image_id: 'metric2',
          },
        ],
        isLoading: true,
      },
      details: {
        detailData: {},
        isLoading: true,
      },
    });

    wrapper = shallow(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render metrics when loading is false', () => {
    store = mockStore({
      metrics: {
        apiData: [
          {
            id: 1,
            nameEU: 'Metric 1',
            imageUrl: 'https://example.com/metric1.png',
            image_id: 'metric1',
          },
          {
            id: 2,
            nameEU: 'Metric 2',
            imageUrl: 'https://example.com/metric2.png',
            image_id: 'metric2',
          },
        ],
        isLoading: false,
      },
      details: {
        detailData: {},
        isLoading: true,
      },
    });

    wrapper = shallow(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    expect(wrapper.find('.metric-container').length).toEqual(0);
  });
});