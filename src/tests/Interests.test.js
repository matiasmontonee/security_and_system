import React from 'react';
import Interests from '../components/Interests';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('renders Interests component', () => {
  render(<Interests />);
  const titleElement = screen.getByText(/Intereses/i);
  const interestElement = screen.getByText(/Diseño y Desarrollo Web/i);
  expect(titleElement).toBeInTheDocument();
  expect(interestElement).toBeInTheDocument();
});