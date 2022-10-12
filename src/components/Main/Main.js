import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export const RoutesContext = createContext([]);
const Main = () => {
    const routes = useLoaderData();

    return (
        <RoutesContext.Provider value={[routes]}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </RoutesContext.Provider>
    );
};

export default Main;