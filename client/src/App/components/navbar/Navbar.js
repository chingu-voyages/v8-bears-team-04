import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';

function Navbar(props) {
    return (
        <nav className="navbar">
            <figure className="brand" >
                <Link to="/">
                    Brand stuff if needed
                </Link>
            </figure>
            <ul className="nav-list">
                {props.children.map(el => <li key={el.props.id}>{el}</li>)}
            </ul>
        </nav>
    );
};

export default Navbar;