import Nav from '../components/Navbar/Nav'
import { IoIosArrowDown } from 'react-icons/io'
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
            <section id="info">

            </section>
        </>
    );
}

export default Home;