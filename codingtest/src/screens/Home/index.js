import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTER from "../../routes";
import HomePage from "./HomePage";

const Home = () => {
    return (
        <Routes>
            <Route path={ROUTER.HOME} element={<HomePage />} />
        </Routes>
    )
}

export default Home