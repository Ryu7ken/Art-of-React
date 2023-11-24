import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {

    const[showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    };

    return (
        <div className="bg-gray-100 rounded-lg shadow-lg shadow-blue-300 p-4 my-8">

                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <h2 className="font-extrabold text-lg">{data.title} ({data.itemCards.length})</h2>
                    <h2 className="text-2xl">⌄</h2>
                </div>

                {showItems && <ItemList items={data.itemCards}/>}

        </div>
    )
}

export default RestaurantCategory;