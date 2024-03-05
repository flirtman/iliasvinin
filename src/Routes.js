import React, {Suspense} from "react";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import './Routes.scss';
import {FaHourglassEnd} from 'react-icons/fa';

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const ServicesPage = React.lazy(() => import("./pages/Services"));
const WorksPage = React.lazy(() => import("./pages/Works"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));



export const routesArr = [
    {
        path: '/about',
        element : <About/>
    },
    {
        path: '/services',
        element : <ServicesPage/>
    },
    {
        path: '/works',
        element : <WorksPage/>
    },
];


const RoutesWrapper = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={
                <div className="fallback-body">
                    <div className="contentWrapper">
                        {/*<img src={LogoIcon} alt="Biramedia.com" className="icon-logo"/>*/}
                        <div className="spinner"><FaHourglassEnd/></div>
                    </div>
                </div>
            }>
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/:city" exact element={<Home/>} />

                    {routesArr.map((item, key) => (
                        <Route key={key} path={item.path}  element={item.element} kye={key} />
                    ))}

                    <Route path="/*"  element={<ErrorPage/>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default RoutesWrapper;
