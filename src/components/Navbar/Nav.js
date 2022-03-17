import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import "./Nav.scss";
const Nav = () => {

    const [showBurger, setShowBurger] = useState(true);
    const [handleBurgerClick, setHandleBurgerClick] = useState();

    const burgerClick = () => {
        console.log("burger")
    }
    const checkWindowSize = () => {
        if (window.innerWidth < 960) {
            setShowBurger(false)
        }
        else {
            setShowBurger(true)
        }
    }

    useEffect(() => {
        checkWindowSize();
    }, [])
    window.addEventListener('resize', checkWindowSize);

    return (
        <nav>
            <div className="logo">Joanna Stopka</div>
            <div className="navigation">
                {showBurger ?
                    (<ul>
                        <li><Link to="/" className="navigation-link">Strona główna</Link></li>
                        <li><Link to="/about" className="navigation-link">O mnie</Link></li>
                        <li><Link to="/offer" className="navigation-link">Oferta</Link></li>
                        <li><Link to="/contact" className="navigation-link">Kontakt</Link></li>
                    </ul>) :
                    (<GiHamburgerMenu className='hamburger' onClick={burgerClick} />)}

            </div>
        </nav>
    );
}

export default Nav;