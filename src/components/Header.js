import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from 'flowbite-react';
import logo from "/public/static/images/fplogo.png";
import text from "/public/static/images/fptext.png";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="h-24 flex justify-between bg-opacity-25 bg-blue-100 shadow-blue-300 shadow-lg">

            <Link to="/">
                <div className="ml-10 h-28 scale-105 flex relative overflow-hidden transition duration-300 hover:duration-300 hover:scale-100">
                    <img src={logo} alt="" className="w-20 object-cover bg-transparent " />
                    <img src={text} alt="" className="w-36 ml-2 scale-150 object-cover bg-transparent" />
                </div>
            </Link>

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