import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { Button } from 'flowbite-react';

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div className="">
            {items.map((item) => (
                <div data-testid="foodItems" key={item.card.info.id} className=" py-10 border-b-2 flex justify-between">

                    <div className="w-9/12 mr-4">

                        <div>
                            <h2 className="font-semibold">{item.card.info.name}</h2>
                            <span>₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                        </div>

                        <p className=" text-gray-500">{item.card.info.description}</p>
                    </div>

                    <div className="w-3/12">

                        <div className="h-28 w-32 mb-5 rounded-lg relative overflow-hidden">
                            <img src={CDN_URL + item.card.info.imageId} className="w-full h-full object-cover"/>
                            
                            <button className="absolute bottom-0 mx-8"
                            onClick={() => handleAddItem(item)}>
                                <Button outline size="xs" mx='6' gradientDuoTone="greenToBlue">ADD+</Button></button>
                        </div>
 
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;