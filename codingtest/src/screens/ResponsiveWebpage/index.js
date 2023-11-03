import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTER from "../../routes";
import ResponsivePage from "./ResponsivePage";

const ResponsiveWebpage = () => {
    return (
        <Routes>
            <Route path={ROUTER.RESPONSIVE_PAGE} element={<ResponsivePage />} />
        </Routes>
    )
}
export default ResponsiveWebpage