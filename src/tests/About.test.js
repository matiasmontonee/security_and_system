import React from 'react';
import About from '../components/About';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('renders About component', () => {
  render(<About />);
  const titleElement = screen.getByText(/Sobre mí/i);
  const nameElement = screen.getByText(/Matías Montone/i);
  expect(titleElement).toBeInTheDocument();
  expect(nameElement).toBeInTheDocument();
});