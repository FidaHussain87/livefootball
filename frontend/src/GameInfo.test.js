import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import GameInfo from "./components/GameInfo";

describe("GameInfo", () => {
  test("has input fields for home and away teams", () => {
    render(<GameInfo onStartGame={() => {}} />);
    expect(screen.getByPlaceholderText("Home Team")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Away Team")).toBeInTheDocument();
  });

  test("has a submit button to start a game", () => {
    render(<GameInfo onStartGame={() => {}} />);
    expect(screen.getByText("Start Game")).toBeInTheDocument();
  });

  test("calls onStartGame when the form is submitted", () => {
    const onStartGame = jest.fn();
    render(<GameInfo onStartGame={onStartGame} />);
    fireEvent.change(screen.getByPlaceholderText("Home Team"), {
      target: { value: "Home" },
    });
    fireEvent.change(screen.getByPlaceholderText("Away Team"), {
      target: { value: "Away" },
    });
    fireEvent.click(screen.getByText("Start Game"));
    expect(onStartGame).toHaveBeenCalledWith("Home", "Away");
  });

  test("updates the input fields when their values are changed", () => {
    render(<GameInfo onStartGame={() => {}} />);
    const homeTeamInput = screen.getByPlaceholderText("Home Team");
    fireEvent.change(homeTeamInput, { target: { value: "New Home Team" } });
    expect(homeTeamInput.value).toBe("New Home Team");
  });

  test("clears the input fields when the form is submitted", () => {
    render(<GameInfo onStartGame={() => {}} />);
    const homeTeamInput = screen.getByPlaceholderText("Home Team");
    const awayTeamInput = screen.getByPlaceholderText("Away Team");
    fireEvent.change(homeTeamInput, { target: { value: "New Home Team" } });
    fireEvent.change(awayTeamInput, { target: { value: "New Away Team" } });
    fireEvent.click(screen.getByText("Start Game"));
    expect(homeTeamInput.value).toBe("");
    expect(awayTeamInput.value).toBe("");
  });

  
});
