import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import"@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";

it ("Should render restaurant card component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name = screen.getByText("Aminia Restaurant");
    expect (name).toBeInTheDocument();
})