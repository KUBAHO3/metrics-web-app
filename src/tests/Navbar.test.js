import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom/extend-expect'; // import jest-dom library

describe('Navbar component', () => {
  it('renders the component', () => {
    const { getByText, getByLabelText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(getByText('Vintage Collections')).toBeInTheDocument();
    expect(getByLabelText('Back')).toBeInTheDocument();
  });
});
