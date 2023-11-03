import React from "react";
import Home from "../Home";
import ResponsiveWebpage from "../ResponsiveWebpage";
import ToDoList from "../TodoList";

const AppLayout = () => {
    return (
        <div>
            <Home />
            <ResponsiveWebpage />
            <ToDoList />
        </div>
    )
}

export default AppLayout