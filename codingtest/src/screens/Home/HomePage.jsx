import React from "react";
import { Link } from "react-router-dom";
import ROUTER from "../../routes";

const HomePage = () => {
    return (
        <div>
            <h2>
                BOOMCO - CODING TEST
            </h2>
            <nav>
                <ul>
                    <li>
                        <Link to={ROUTER.RESPONSIVE_PAGE}>RESPONSIVE PAGE</Link>
                    </li>
                    <li>
                        <Link to={ROUTER.TO_DO_LIST}>TODOLIST</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HomePage;