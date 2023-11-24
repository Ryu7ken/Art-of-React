import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it ("Should render Accordian of Menu component", async () => {
    await act(async () =>
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
        </BrowserRouter>
    )
    );

    const accordian = screen.getByText("Recommended (20)");
    expect (accordian).toBeInTheDocument();
});

it ("Should render items of the selected accordian of Menu component", async () => {
    await act(async () =>
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
        </BrowserRouter>
    )
    );

    const accordian = screen.getByText("Recommended (20)");
    fireEvent.click(accordian);

    const item = screen.getAllByTestId("foodItems");
    expect (item.length).toBe(20);
});

it ("Should check (0) cart", async () => {
    await act(async () =>
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
        </BrowserRouter>
    )
    );

    const cart = screen.getByText("(0) Cart");
    expect (cart).toBeInTheDocument();

});

it ("Should add 2 item to cart and then clear the cart", async () => {
    await act(async () =>
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>
    )
    );

    const accordian = screen.getByText("Recommended (20)");
    fireEvent.click(accordian);

    const item = screen.getAllByTestId("foodItems");
    expect (item.length).toBe(20);

    const cartBefore = screen.getByText("(0) Cart");
    expect (cartBefore).toBeInTheDocument();

    const addBtn = screen.getAllByRole("button", {name: "ADD+"});
    fireEvent.click(addBtn[0]);

    const cart = screen.getByText("(1) Cart");
    expect (cart).toBeInTheDocument();

    fireEvent.click(addBtn[1]);
    const cart2 = screen.getByText("(2) Cart");
    expect (cart2).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(22);

    const clear = screen.getByRole("button", {name: "Clear Cart"});
    fireEvent.click(clear);
    expect(screen.getAllByTestId("foodItems").length).toBe(20);
});