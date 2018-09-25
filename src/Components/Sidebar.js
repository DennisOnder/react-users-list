import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return(
        <nav>
            <ul>
                <NavLink to="/">
                    <li>
                        <i className="material-icons md-36">supervised_user_circle</i>
                    </li>
                </NavLink>
                <NavLink to="/posts">
                    <li>
                        <i className="material-icons md-36">message</i>
                    </li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Sidebar;