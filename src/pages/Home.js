import Nav from '../components/Navbar/Nav'
import { Link } from "react-router-dom"
import WelcomeSection from '../components/Home/WelcomeSection'
import IntroductionSection from '../components/Home/IntroductionSection'
import TrainingSection from "../components/Home/TrainingSection"
import CardsSection from "../components/Home/CardsSection"
import { motion } from 'framer-motion'
import { headerAnimation, imageAnimation, textAnimation, box, reveal, revealReverse, fromDown } from "../components/Animation"
import { useScroll } from "../components/useScroll";
import "./Home.scss"
const Home = () => {
    return (
        <>
            <Nav />
            <WelcomeSection />
            <IntroductionSection />
            <TrainingSection />
            <CardsSection />
        </>
    );
}

export default Home;