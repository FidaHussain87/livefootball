import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Scoreboard from './components/Scoreboard';

describe('Scoreboard', () => {
  test('renders without crashing', () => {
    render(<Scoreboard />);
    expect(screen.getByText('Live Football World Cup Scoreboard')).toBeInTheDocument();
  });

  test('starts a new game on form submission', async() => {
    render(<Scoreboard />);
    fireEvent.change(screen.getByPlaceholderText('Home Team'), { target: { value: 'Home' } });
    fireEvent.change(screen.getByPlaceholderText('Away Team'), { target: { value: 'Away' } });
    fireEvent.click(screen.getByText('Start Game'));
    const regex = /Home 0 - Away 0/i;  // Regular expression to match the text
    const newGameText = await screen.findByText(regex);
    expect(newGameText).toBeInTheDocument();
  });
});
