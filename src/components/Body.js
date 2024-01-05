import RestaurantCard from "./RestaurantCard";
import CuisineCard from "./CuisineCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { Button } from 'flowbite-react';
import useRestaurantList from "../utils/useRestaurantList";
import OfferCard from "./OfferCard";

const Body = () => {

    const {listOfOffer = [], listOfCuisine = [], listOfRestaurant = [], filteredRestaurant = [], setFilteredRestaurant} = useRestaurantList();
    const [searchText, setSearchText] = useState("");


    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
    return (
        <div className="w-6/12 m-auto text-center">
            <div className="mt-52">
                <h1 className="font-bold text-3xl">Connection Error</h1>
                <h1 className="text-lg text-gray-600">Please check your internet connection and try again.</h1>
            </div>
        </div>
        );


        useEffect(() => {
            setFilteredRestaurant(listOfRestaurant.filter((res) => 
            res.info.name.toLowerCase().includes(searchText.toLowerCase())))
        },[searchText, listOfRestaurant]);


    return (listOfRestaurant?.length === 0) ? (<Shimmer/>) : (

        <div className="m-auto w-9/12">

            <div className="border-b-2">
                <h1 className="mt-7 font-bold text-3xl">Best offers for you</h1>

                <div className="my-10 flex overflow-x-scroll">
                    {listOfOffer.map((offer) => (
                        <OfferCard key={offer.id} resOffer={offer}/>
                        ))}
                </div>

                <h1 className="mt-7 font-bold text-3xl">What's on your mind?</h1>

                <div className="my-10 flex overflow-x-scroll">
                    {listOfCuisine.map((cuisine) => (
                        <CuisineCard key={cuisine.id} resCuisine={cuisine}/>
                        ))}
                </div>
            </div>

            <h1 className="mt-10 mb-5 font-bold text-3xl">Top restaurant chains in Kolkata</h1>

            <div className="flex justify-evenly my-6 py-6 items-center rounded-xl bg-blue-100 shadow-lg shadow-blue-400">
                
                <div className="">
                    <input data-testid="searchInput" className="rounded-lg border-white pr-20" type="text" placeholder="Search for Restaurants"
                    value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
                </div>

                <div className="">
                    <button className=""
                        onClick={ () => {
                            const filteredList = filteredRestaurant.filter((res) => res.info.sla.deliveryTime <= 30);
                            setFilteredRestaurant(filteredList);
                        }}><Button outline gradientDuoTone="tealToLime">
                        Fast Delivery </Button></button>
                </div>

                <div className="">
                    <button className=""
                        onClick={ () => {
                            const filteredList = listOfRestaurant.filter((res) => res.info.avgRating >= 4.5);
                            setFilteredRestaurant(filteredList);
                        }}><Button outline gradientDuoTone="tealToLime">
                         Ratings 4.5+ </Button></button>
                </div>

                <div className="">
                    <button className=""
                        onClick={ () => {
                            const filteredList = listOfRestaurant.filter((res) => res.info.veg === true);
                            setFilteredRestaurant(filteredList);
                        }}><Button outline gradientDuoTone="tealToLime">
                            Pure Veg </Button></button>
                </div>

                <div className="">
                    <button className=""
                        onClick={ () => {
                            const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 0);
                            setFilteredRestaurant(filteredList);
                        }}><Button outline gradientDuoTone="tealToLime">
                            Clear Filters </Button></button>
                </div>
            </div> 

            <div className="flex flex-wrap justify-evenly">
                    {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                        <RestaurantCard resData={restaurant}/>
                    </Link>))}
            </div>

        </div>
    );
};

export default Body;