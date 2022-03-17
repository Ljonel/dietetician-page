import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { VscMenu } from "react-icons/vsc"
import { BsFacebook, BsInstagram } from "react-icons/bs"
import{AiOutlineClose} from "react-icons/ai"
import Sidebar from "../Sidebar/Sidebar"

import "./Nav.scss";
const Nav = () => {

    const [showBurger, setShowBurger] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);

    const burgerClick = () => {
        setShowSidebar(!showSidebar)
    }
    const checkWindowSize = () => {
        if (window.innerWidth <= 760) {
            setShowBurger(false)
        }
        else {
            setShowBurger(true)
            setShowSidebar(false)
        }
    }

    useEffect(() => {
        checkWindowSize();
    }, [])
    window.addEventListener('resize', checkWindowSize);

    return (<>
        <nav>
            <div className="logo">{showBurger ? (<Link to="/">Joanna Stopka</Link>) : (<Link to="/">JS</Link>)}</div>
            <div className="navigation">
                {showBurger ?
                    (<ul>
                        <li><Link to="/" className="navigation-link">Strona główna</Link></li>
                        <li><Link to="/about" className="navigation-link">O mnie</Link></li>
                        <li><Link to="/offer" className="navigation-link">Oferta</Link></li>
                        <li><Link to="/contact" className="navigation-link">Kontakt</Link></li>
                    </ul>) :
                    (
                    <>
                    {!showSidebar ? (<VscMenu className='hamburger' onClick={burgerClick} />) : (<AiOutlineClose className='hamburger' onClick={burgerClick}/>) }
                        
                    </>)
                    }
            </div>
        </nav>
        <div className={showSidebar ? "sidebar active" : "sidebar"}>
            <ul className="sidebar-menu">
                {Sidebar.map((item, index) => (
                    <li key={index} className={item.cname}>

                        <Link to={item.path}>{item.icon}{item.title}</Link>
                    </li>
                ))}
            </ul>
            <div className="sidebar-socials">
                <ul>
                    <li className="sidebar-socials">
                        <a href="www.youtube.com">
                            <BsFacebook />
                        </a>
                        <a href="www.youtube.com">
                            <BsInstagram />
                        </a>
                        <a href="www.youtube.com">
                            <BsFacebook />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </>
    );
}

export default Nav;