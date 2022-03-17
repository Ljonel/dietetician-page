import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { VscMenu } from "react-icons/vsc"
import "./Nav.scss";
const Nav = () => {

    const [showBurger, setShowBurger] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);

    const burgerClick = () => {
        setShowSidebar(!showSidebar)
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
                    (<VscMenu className='hamburger' onClick={burgerClick} />)}
            </div>
        </nav>
        <div className={showSidebar ? "sidebar active" : "sidebar"}>

        </div>
    </>
    );
}

export default Nav;