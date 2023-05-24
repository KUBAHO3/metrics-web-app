import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

  it('calls navigate function when back button is clicked', () => {
    const navigateMock = jest.fn();
    const { getByLabelText } = render(
      <Router>
        <Navbar navigate={navigateMock} />
      </Router>,
    );
    fireEvent.click(getByLabelText('Back'));
    expect(navigateMock).not.toHaveBeenCalled();
  });
});
