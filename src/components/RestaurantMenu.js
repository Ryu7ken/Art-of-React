import useRestaurantMenu from "../utils/useRestaurantMenu";
import {useParams, Link } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerMenu from "./ShimmerMenu";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { MdOutlineTimelapse } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

const RestaurantMenu = () => {
    const {restaurantId} = useParams();
    const resInfo = useRestaurantMenu(restaurantId);

    if (resInfo === null) return <ShimmerMenu/>;

    const {name, cuisines, costForTwoMessage, avgRating, locality, totalRatingsString} = resInfo?.cards[0]?.card?.card?.info;
    const {slaString} = resInfo?.cards[0]?.card?.card?.info?.sla;
    const {message} = resInfo?.cards[0]?.card?.card?.info?.feeDetails;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


    
    return(
        <div className="w-7/12 mx-auto my-6">

            <div className="bg-gray-200 shadow-xl shadow-blue-400 rounded-lg">
                <div className="border-b-2 border-dashed border-gray-400">

                    <div className="flex justify-between">

                        <div className="mt-6 ml-3">
                            <Breadcrumb>
                                <Link to="/"><Breadcrumb.Item icon={HiHome}>Home {'>'}</Breadcrumb.Item></Link>
                                <Link to={"/restaurants/"+restaurantId}><Breadcrumb.Item> {name}</Breadcrumb.Item></Link>
                            </Breadcrumb>
                            <h1 className="py-5 text-2xl font-bold font-serif">{name}</h1>
                        </div>

                        <div className="">
                            
                            <div className="flex">
                                <div className="px-1 mt-6">
                                    <IoStar size={18} color="green"/>
                                </div>
                                <h1 className="pt-5 pr-20 text-lg font-bold text-green-600">{avgRating}</h1>
                            </div>

                            <h1 className="px-1 text-sm font-semibold  text-gray-600">{totalRatingsString}</h1>
                        </div>   


                    </div>

                    <h3 className="py-1 text-gray-600 text-sm ml-3">{cuisines.join(", ")}</h3>
                    <h4 className="text-gray-600 text-sm ml-3">{locality}</h4> 

                    <div className="flex ml-3">
                        <div className="mt-4">
                            <MdOutlineDeliveryDining size={24}/>
                        </div>
                        <h4 className="py-4 px-1 text-gray-600">{message}</h4>
                    </div>

                </div>

                <div className="flex mb-10 ml-3">

                    <div className="flex">
                        <div className="mt-4">
                            <MdOutlineTimelapse size={25}/>
                        </div>
                        <h2 className="py-4 px-1 mb-8 font-bold">{slaString}</h2>
                    </div>

                    <div className="flex">
                        <div className="mt-4 ml-5">
                            <HiOutlineCurrencyRupee size={25}/>
                        </div>
                        <h2 className="px-1 py-4 mb-8 font-bold">{costForTwoMessage}</h2>
                    </div>
                </div>
            </div>

            {categories.map((category) => (
                <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>
            ))}

        </div>
    );
};

export default RestaurantMenu;