import React,  { useState } from 'react'
import './Menu.css';
import { FaLeaf } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";





function Menu() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);




    return (
        <div className="header">
            <div className="container">
                <div className="header-nav">
                    <div className="logo-nav">
                        <a href="#">SearchTrees <FaLeaf/></a>
                    </div>
                    <ul className={click ? "menu active" : " menu"}>
                        <li item="Home" className="menu-link" onClick={closeMobileMenu}>
                            <a href="./index.html">Home</a>
                        </li>
                        <li item="Search" className="menu-link" onClick={closeMobileMenu}>
                            <a href="#">Search</a>
                        </li>
                        <li item="Know" className="menu-link" onClick={closeMobileMenu}>
                            <a href="#">Know</a>
                        </li>
                        <li item="About" className="menu-link" onClick={closeMobileMenu}>
                            <a href="#">About</a>
                        </li>
                        <li item="Login" className="menu-link" onClick={closeMobileMenu}>
                            <a href="#">Login</a>
                        </li>
                        
                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <FiX/>
                        ) : (
                            <FiMenu/>
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
