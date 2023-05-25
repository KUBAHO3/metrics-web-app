import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Layout from '../pages/Layout';

describe('Layout Component', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
