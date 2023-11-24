import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with Login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name:"Login"});

    expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with 0 cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("(0) Cart");

    expect(cartItems).toBeInTheDocument();
});

it("Should render Header component with Cart only", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cart = screen.getByText(/Cart/);

    expect(cart).toBeInTheDocument();
});

it("Should change login button to logout on click in header component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const login = screen.getByRole("button", {name:"Login"});
    fireEvent.click(login);
    const logout = screen.getByRole("button", {name:"Logout"});

    expect(logout).toBeInTheDocument();
});

it("Should change logout button to login on click in header component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const login = screen.getByRole("button", {name:"Login"});
    fireEvent.click(login);
    const logout = screen.getByRole("button", {name:"Logout"});
    expect(logout).toBeInTheDocument();

    fireEvent.click(logout);

    expect(login).toBeInTheDocument();
});