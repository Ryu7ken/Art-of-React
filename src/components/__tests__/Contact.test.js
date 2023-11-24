import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    expect (heading).toBeInTheDocument();
});

test("Should load button in contact us component", () => {
    render(<Contact/>);
    const button = screen.getByText("Let's talk");
    expect (button).toBeInTheDocument();
});

test("Should load input name in contact us component", () => {
    render(<Contact/>);
    const inputName = screen.getByPlaceholderText("First name");
    expect (inputName).toBeInTheDocument();
});

test("Should load 5 input boxes in contact us component", () => {
    render(<Contact/>);
    const inputBoxes = screen.getAllByRole("textbox");
    expect (inputBoxes.length).toBe(5);
});