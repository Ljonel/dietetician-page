import Nav from '../components/Navbar/Nav'
import { Link } from "react-router-dom"
import WelcomeSection from '../components/Home/WelcomeSection'
import IntroductionSection from '../components/Home/IntroductionSection'
import TrainingSection from "../components/Home/TrainingSection"
import CardsSection from "../components/Home/CardsSection"
import { motion } from 'framer-motion'
import { headerAnimation, imageAnimation, textAnimation, box, reveal, revealReverse, fromDown } from "../components/Animation"
import { useScroll } from "../components/useScroll";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import "./Home.scss"
const Home = () => {
    return (
        <>
            <Nav />
            <WelcomeSection />
            <IntroductionSection />
            <section id="gauge">
                <div className="gauge-el">
                    <CountUp end={34} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <h3>Rozpisane jadłospisy</h3>
                </div>
                <div className="gauge-el">
                    <CountUp end={140} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <h3>Przeprowadzone treningi</h3>
                </div><div className="gauge-el">
                    <CountUp end={27} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <h3>Klienci</h3>
                </div>
            </section>
            <TrainingSection />
            <CardsSection />
        </>
    );
}

export default Home;