import { CDN_URL } from "../utils/constants";

const CartList = ({items}) => {


    return (
        <div className="">
            {items.map((item) => (
                <div data-testid="foodItems" key={item.card.info.id} className="my-4 border-b-2 flex">

                    <div className="m-5">
                        <div className="h-24 w-28 rounded-lg relative overflow-hidden">
                            <img src={CDN_URL + item.card.info.imageId} className="w-full h-full object-cover"/>
                        </div>
                    </div>

                    <div className="">
                        <div className="mx-5 mt-4 mb-2 flex text-lg">
                                <h1 className="font-semibold">{item.card.info.name} - ₹</h1>
                                <h1 className="font-semibold"> {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</h1>
                        </div>
                        <p className="mx-5 text-gray-600">{item.card.info.description}</p>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default CartList;