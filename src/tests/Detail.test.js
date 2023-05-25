import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('Detail', () => {
  let store;

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
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should dispatch fetchDetailData action on mount', () => {
    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
