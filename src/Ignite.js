import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { createGlobalStyle } from "styled-components";

const AppLayout = () => {

    const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
    }`;


    return (
        <Provider store={appStore}>
            <div>
                <GlobalStyle/>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </Provider>
    );
};

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children: [
            {
                path:"/",
                element: <Body/>,
            },
            {
                path:"/about",
                element: <About/>,
            },
            {
                path:"/contact",
                element: <Contact/>,
            },
            {
                path:"/grocery",
                element: (
                <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
                ),
            },
            {
                path:"/restaurants/:restaurantId",
                element: <RestaurantMenu/>,
            },
            {
                path:"/cart",
                element: <Cart/>,
            },
        ],
        errorElement: <Error/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);