import { Link } from "react-router-dom";
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="h-72 bg-gray-950 text-white">
            
            <div className="flex justify-evenly p-10">

                <div>
                    <h1 className="text-2xl font-bold">foodpanda</h1>
                </div>

                <div>
                    <h1 className="my-2"><Link to="/about">About Us</Link></h1>
                    <h1 className="my-2"><Link to="/contact">Contact Us</Link></h1>
                </div>

                <div>
                    <h1 className="my-2 hover:cursor-pointer">Terms & Conditions</h1>
                    <h1 className="my-2 hover:cursor-pointer">Cookie Policy</h1>
                    <h1 className="my-2 hover:cursor-pointer">Privacy Policy</h1>
                </div>

            </div>

                <div className="w-11/12 border-t-2 m-auto border-gray-500">
                    
                    <div className="flex justify-evenly p-9">
                        <h1>© foodpanda Pvt. Ltd</h1>
                        <BsGithub size={30}/>
                    </div>

                </div>

        </div>
    );
};

export default Footer;