import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '../components/Contact';

test('renders Contact component', () => {
  render(<Contact />);
  const titleElement = screen.getByText(/Contáctame/i);
  expect(titleElement).toBeInTheDocument();
});

test('validate form submission', () => {
  render(<Contact />);
  const nameInput = screen.getByLabelText(/Nombre/i);
  const emailInput = screen.getByLabelText(/Email/i);
  const messageInput = screen.getByLabelText(/Mensaje/i);
  const submitButton = screen.getByText(/Enviar/i);

  fireEvent.change(nameInput, { target: { value: 'Matías Montone' } });
  fireEvent.change(emailInput, { target: { value: 'matiasmontonedev@gmail.com' } });
  fireEvent.change(messageInput, { target: { value: 'Mensaje de prueba' } });
  fireEvent.click(submitButton);

  const successModal = screen.getByText(/Mensaje enviado con éxito/i);
  expect(successModal).toBeInTheDocument();
});