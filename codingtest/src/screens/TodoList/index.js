import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTER from "../../routes";
import ToDoListPage from "./TodoListPage";

const ToDoList = () => {
    return (
        <Routes>
            <Route path={ROUTER.TO_DO_LIST} element={<ToDoListPage />} />
        </Routes>
    )
}
export default ToDoList