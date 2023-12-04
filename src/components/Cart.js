import { useSelector,  useDispatch} from "react-redux";
import CartList from "./CartList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { Button } from 'flowbite-react';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const totalPrice = cartItems.reduce((acc, currentItem) => {
        const data = currentItem.card.info;
        const price = data.price > 0 ? data.price : data.defaultPrice || 0;
        return acc + price;
      }, 0);

    return (cartItems.length === 0) ? (
            <div className="m-auto w-9/12">
                <div className="my-10 text-center">
                    <img src={require("../../public/static/images/emptycart.svg")} alt="" className="m-auto"/>
                    <h1 className="text-lg font-semibold">Your cart is empty</h1>
                    <h1 className="">You can go to home page to view more restaurants</h1>
                    <Link to="/"><button className="bg-blue-500 hover:bg-blue-600 hover:cursor-pointer rounded-lg my-3 py-2 px-4 font-semibold text-white">Go Home</button></Link>
                </div>
            </div>
    ) :  (
        <div className="my-10">

            <div className="w-10/12 m-auto">
                <div className="flex justify-between m-6 p-6 items-center rounded-xl bg-blue-50 shadow-lg shadow-blue-400">
                    <h1 className="text-4xl font-bold">Cart ({cartItems.length} - Items)</h1>
                    <button className="px-4 py-1 rounded-xl"
                    onClick={handleClearCart}><Button outline gradientDuoTone="redToYellow">Clear Cart</Button></button>
                </div>
            </div>
        
            <div className="m-auto w-10/12">
                <div className="w-11/12 m-auto rounded-lg bg-gray-100 shadow-xl shadow-blue-300">
                    <h1 className="text-3xl font-bold text-center py-4 border-b-2">Checkout</h1>

                    <div className="flex justify-between">
                        <div className="m-3 w-9/12">
                            <CartList items={cartItems}/>
                        </div>

                        <div className="w-3/12 border-l-2">
                            {cartItems.length !== 0 && (
                                <div className="my-4 text-center">
                                    <h1 className="text-2xl mb-4 font-semibold">Bill Details</h1>
                                    <p className="text-lg font-semibold">Item Total - ₹ {Math.floor(totalPrice / 100)}</p>
                                    <button className="my-10"><Button gradientMonochrome="success" >Pay Now</Button></button>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Cart;