import {CDN_URL} from "../utils/constants";
import { MdStars } from "react-icons/md";
import { BiSolidTimeFive } from "react-icons/bi";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, areaName} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    //const {header, subHeader} = resData?.info?.aggregatedDiscountInfoV3;

    return (
        <div data-testid="resCard" className="my-6 w-72 scale-95 bg-gray-100 rounded-2xl shadow-lg shadow-blue-300 transition duration-300 hover:duration-300 hover:scale-100">

            <div className="relative h-52 w-72 rounded-2xl overflow-hidden">
                <img className="object-cover w-full h-full" alt="res-image" src={CDN_URL + cloudinaryImageId} />
                {/* <h1 className="absolute w-8/12 mb-2 pl-2 bottom-0 inset-x-0 text-white text-sm text-left font-bold bg-blue-500">{header} {subHeader}</h1> */}
            </div>

            <h3 className="pl-3 py-2 font-bold text-lg truncate">{name}</h3>
            <h4 className="pl-3 truncate text-gray-500">{cuisines.join(", ")}</h4>

            <div className="flex space-x-10">

                <div className="px-3 flex">
                    <div className="mt-1">
                        <MdStars size={18} color="green" />
                    </div>
                    <h4 className="ml-1 font-semibold">{avgRating}</h4>
                </div>

                <div className="px-2 flex">
                    <div className="mt-1">
                        <BiSolidTimeFive size={18} />
                    </div>
                    <h4 className="px-1 font-semibold">{deliveryTime} min</h4>
                </div>

            </div>

            <div className="flex justify-between">  
                <h4 className="pl-3 pb-2 text-gray-500 truncate">{areaName}</h4>
                <h4 className="w-3/6 pr-3 pb-2 text-right text-gray-600">{costForTwo}</h4>
            </div>
            
        </div>
    );
};

export default RestaurantCard;