import React from 'react'
import './header.css'
import Search from './img/search (1).svg';
import Logo from '../../Main/img/logo motion web.png';
import { NavLink } from "react-router-dom";


const Header = () => {
    return (

            <header id="header">
                <div className="container">
                    <div className="nav-menu">
                        <div className="header__menu">
                            <NavLink to="/">
                                <img src={Logo} alt="" className="logo"/>
                            </NavLink>
                            <h1 className="logo-text">motion web </h1>
                        </div>
                        {/*<div className="icon">*/}
                        {/*    <input placeholder="курстарды издөө "/>*/}
                        {/*    <img src={Search} alt=""/>*/}
                        {/*    <div className="line"/>*/}
                        {/*</div>*/}
                    </div>
                    <div className="lini"/>
                </div>
            </header>

    )
}

export default Header
