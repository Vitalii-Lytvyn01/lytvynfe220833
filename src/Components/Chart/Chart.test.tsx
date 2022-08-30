import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import Chart from './Chart';

test('Render test', () => {
  render(<App />);
  const element = screen.getByText(/spent time/i);
  expect(element).toBeInTheDocument;
})

test('Chart render test', () => {
  const {container} = render(<Chart/>);
  expect(container.getElementsByClassName('chart-item').length).toBe(4);
})

test('Chart render test', () => {
  const {container} = render(<Chart/>);
  expect(container.getElementsByClassName('chart-item').length).toBe(4);
})

test('Chart inital values test', () => {
  const {container} = render(<Chart/>);
  expect(container.getElementsByClassName('bar')[0].innerHTML).toBe('7.4');
})