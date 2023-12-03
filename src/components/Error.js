import { useRouteError } from "react-router-dom";
import errorpage from "../components/images/errorpage.png"

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div className="w-4/12 m-auto text-center">
            <img src={errorpage}/>
            <h1 className="mb-4 font-bold text-3xl">{err.status} : {err.statusText}</h1>
            <h1 className="text-gray-600">
                Uh-oh! Looks like the page you are trying to access, doesn't exist. Please start afresh.
            </h1>
        </div>
    );
};

export default Error;