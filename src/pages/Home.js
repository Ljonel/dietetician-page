import Nav from '../components/Navbar/Nav'
import { Link } from "react-router-dom"
import { IoIosArrowDown } from 'react-icons/io'
import { GiTreeBranch } from 'react-icons/gi'

import "./Home.scss"
const Home = () => {
    return (
        <>
            <Nav />
            <section id="welcome">
                <div className="welcome-text-wrapper">
                    <div className="welcome-text">
                        <h3>Dietetyk online</h3>
                        <h1>Joanna Stopka</h1>
                        <p>Prosta i skuteczna metoda na wymarzoną sylwetkę</p>
                        <a href="" className='arrow-down'><IoIosArrowDown /></a>
                    </div>
                </div>
                <div className="welcome-img-wrapper">
                    <div className="welcome-img">
                    </div>
                    <div className="welcome-img-half">
                    </div>
                    <img src="welcome-img.jpg" alt="" />

                </div>
            </section>
            <section id="introduction">
                <div className="introduction-img">
                    {/* <img src="welcome-img.jpg" alt="" /> */}
                </div>
                <div className="introduction-text">
                    <GiTreeBranch className='introduction-icon' />
                    <h1>Poznajmy się</h1>
                    <h5>
                        Jestem Dyplomowanym Dietetykiem Klinicznym. Ukończyłam studia wyższe na Śląskim Uniwersytecie Medycznym w Katowicach. Kocham gotować i próbować nowych smaków. Mój blog powstał z myślą o tych, którzy szukają ciekawostek z dietetycznego świata oraz inspirujących przepisów na co dzień.
                        Miło mi Cię poznać!
                    </h5>
                    <Link to="/about"><button className='introduction-btn'>Więcej o mnie</button></Link>
                </div>
            </section>
        </>
    );
}

export default Home;