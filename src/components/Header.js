import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from 'flowbite-react';

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="h-24 flex justify-between bg-opacity-25 bg-blue-100 shadow-blue-300 shadow-lg">

            
                <div className="w-56">
                <Link to="/">
                    <h1 className="text-center my-7 text-3xl font-semibold text-orange-600">foodilicious</h1>
                </Link>
                </div>
            

            <div className="flex items-center">
                <ul className="flex my-auto">
                    <li className="mx-4 my-2 text-xl transition duration-300 hover:duration-300 hover:text-blue-500">
                        <Link to="/">Home</Link>
                        </li>
                    <li className="mx-4 my-2 text-xl transition duration-300 hover:duration-300 hover:text-blue-500">
                        <Link to="/about">About</Link>
                        </li>
                    <li className="mx-4 my-2 text-xl transition duration-300 hover:duration-300 hover:text-blue-500">
                        <Link to="/contact">Contact Us</Link>
                        </li>
                    <li className="mx-4 my-2 text-xl transition duration-300 hover:duration-300 hover:text-blue-500">
                        <Link to="/cart">({cartItems.length}) Cart</Link>
                        </li>

                    <Button className="mx-3 items-center"
                    onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }} 
                    outline gradientDuoTone="purpleToBlue">{btnNameReact}</Button>
                </ul>
            </div>
            
        </div>
    );
};

export default Header;