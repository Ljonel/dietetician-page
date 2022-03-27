import React from "react";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import ContactForm from "../components/Contact/ContactForm";
import "./Contact.scss";
const Contact = () => {
  return (
    <>
      <Nav />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
