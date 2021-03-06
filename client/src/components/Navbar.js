import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Signup</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/post">Post</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/logout">Logout</NavLink>
            </li>
            
         </ul>
    
  </div>
</nav>
        </>
    )
}

export default Navbar
