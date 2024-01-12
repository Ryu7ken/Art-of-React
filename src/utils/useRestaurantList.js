import { useState, useEffect } from "react";
import { RES_API } from "./constants";

const useRestaurantList = () => {

    // const [listOfOffer, setListOfOffer] = useState([]);
    const [listOfCuisine, setListOfCuisine] = useState([]);
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch(RES_API);

        const json = await data.json();
        console.log(json);

        // setListOfOffer(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
        setListOfCuisine(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };

    return {listOfCuisine, listOfRestaurant, filteredRestaurant, setFilteredRestaurant};
};

export default useRestaurantList;