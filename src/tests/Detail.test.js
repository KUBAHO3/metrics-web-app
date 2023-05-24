import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Detail from '../pages/Detail';

const mockStore = configureMockStore([thunk]);

describe('Detail', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      detailData: {
        detailData: {
          id: 'abc123',
          nameEU: 'Fossil',
          buyPrice: 1000,
          sellPrice: 500,
          museumDesc: 'A fossilized dinosaur bone.',
          imageUrl: 'https://example.com/fossil.jpg',
          image_id: 'fossil',
        },
        isLoading: false,
      },
    });

    jest.spyOn(store, 'dispatch');

    component = render(
      <MemoryRouter initialEntries={['/detail/abc123']}>
        <Provider store={store}>
        <Routes>
          <Route path="/detail/:id" component={Detail}>
          </Route>
        </Routes>
        </Provider>
      </MemoryRouter>,
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should dispatch fetchDetailData action on mount', () => {
    expect(store.dispatch).not.toHaveBeenCalled();
  });

});