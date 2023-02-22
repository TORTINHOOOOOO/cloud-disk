import React from 'react';
import './Navbar.css'
import Logo from '../assets/img/navbar-logo.svg'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar__logo"/>
                <div className="navbar_header">TORT CLOUD</div>
                <div className="navbar_login"><NavLink to="/login">Войти</NavLink></div>
                <div className="navbar_registration"><NavLink to="/registration">Регистрация</NavLink></div>
            </div>
        </div>
    );
};

export default Navbar;