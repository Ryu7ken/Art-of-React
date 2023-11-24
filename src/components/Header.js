import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from 'flowbite-react';

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-blue-50 shadow-blue-300 shadow-lg">

            <div>
            <Link to="/"><img className="w-40" src={LOGO_URL} /></Link>
            </div>

            <div className="flex items-center">
                <ul className="flex">
                    <li className="mx-6 text-xl transition duration-300 hover:duration-300 hover:text-blue-500">
                        <Link to="/">Home</Link>
                        </li>
                    <li className="mx-6 text-xl transition duration-300 hover:duration-300 hover:text-blue-500">
                        <Link to="/about">About Us</Link>
                        </li>
                    <li className="mx-6 text-xl transition duration-300 hover:duration-300 hover:text-blue-500">
                        <Link to="/contact">Contact Us</Link>
                        </li>
                    <li className="mx-6 text-xl transition duration-300 hover:duration-300 hover:text-blue-500">
                        <Link to="/cart">({cartItems.length}) Cart</Link>
                        </li>

                    <button className="mx-3 items-center"
                        onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}><Button outline gradientDuoTone="purpleToBlue">{btnNameReact}</Button></button>
                </ul>
            </div>
            
        </div>
    );
};

export default Header;