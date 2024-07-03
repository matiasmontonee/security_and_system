import React from 'react';
import Header from '../components/Header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Header Component › renders header with correct text', () => {
  render(<Header />);
  const headerElement = screen.getByText(/Matías Montone/i);
  expect(headerElement).toBeInTheDocument();
});