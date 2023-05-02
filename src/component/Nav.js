import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/지선">About</Link>
        </div>
    );
}


export default Nav;