import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/지선">안지선은 보아라.</Link>
        </div>
    );
}


export default Nav;