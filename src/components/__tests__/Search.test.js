import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it ("Should render the Body Component with search", async() => {
    await act(async() =>
    render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    )
    );

    const searchBtn = screen.getByRole("button", {name: "Search"});
    expect (searchBtn).toBeInTheDocument();
});

it ("Should render the Body Component and search for burger", async() => {
    await act(async() =>
    render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    )
    );

    const searchBtn = screen.getByRole("button", {name: "Search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target: {value: "burger"}});
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId("resCard");
    expect (cards.length).toBe(1);
});

it ("Should render the Body Component with all restaurant cards", async() => {
    await act(async() =>
    render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    )
    );

    const cardsBefore = screen.getAllByTestId("resCard");
    expect (cardsBefore.length).toBe(20);
});

it ("Should render the Body Component with all restaurant cards with Rating > 4.5", async() => {
    await act(async() =>
    render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect (cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button", {name: "Ratings 4.5+"});
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect (cardsAfterFilter.length).toBe(6);
});