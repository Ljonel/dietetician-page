import React, { useRef, useState } from "react";
import Title from "../Title";
import { Formik, Field, Form } from "formik";
import emailjs from "emailjs-com";
import { AiOutlineClose } from "react-icons/ai";
import audio from "../../assets/whoosh.mp3";
import { HiOutlineMail } from "react-icons/hi";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const ContactForm = () => {
  const form = useRef();
  const [successInfo, setSuccessInfo] = useState(false);
  const playSound = () => {
    new Audio(audio).play();
  };
  const sendEmail = (e) => {
    try {
      emailjs
        .sendForm(
          "gmail",
          "template_h27mwfk",
          form.current,
          "MOAQZgPKLOz04VvQd"
        )
        .then(
          (result) => {
            console.log(result.status);
            setSuccessInfo(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch (e) {
      console.log(e);
    }
  };

  const closeBtnHandler = () => {
    setSuccessInfo(false);
  };
  return (
    <section id="contactForm">
      <Title word="Kontakt" />

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, { resetForm }) => {
          sendEmail();
          setTimeout(() => {
            resetForm();
          }, 1000);
        }}
      >
        <Form className="contact-form" ref={form}>
          <div className="form-container">
            <div className="row-1-group">
              <div className="row-element">
                <label htmlFor="firstName">Imię</label>
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="Imię"
                  required
                  min="3"
                  max="50"
                />
                <div className="input-underline"></div>
              </div>
              <div className="row-element">
                <label htmlFor="lastName">Nazwisko</label>
                <Field
                  id="lastName"
                  name="lastName"
                  placeholder="Nazwisko"
                  required
                  min="3"
                  max="50"
                />
                <div className="input-underline"></div>
              </div>
            </div>
            <div className="row-2-group">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="email"
                required
                placeholder="Twój email"
              />
              <div className="input-underline"></div>
            </div>
            <div className="row-3-group">
              <label htmlFor="message">Treść wiadomości</label>
              <Field name="message" as="textarea" required />
              <div className="input-underline"></div>
            </div>
            {successInfo ? (
              <div className="success-info">
                Wysłano pomyślnie!
                {playSound()}
                <AiOutlineClose
                  className="close-success-info"
                  onClick={closeBtnHandler}
                />
              </div>
            ) : (
              <button type="submit" className="contact-btn">
                Wyślij
              </button>
            )}
          </div>
        </Form>
      </Formik>

      {/* <div className="contact-datas">
        <div className="contact-container">
          <div className="contact-email">
            <HiOutlineMail className="contact-icon" />
            <div className="contact-element">
              <h3>email</h3>
              <p>stopkadietetyk@gmail.com</p>
            </div>
          </div>

          <div className="contact-social">
            <BsFacebook className="contact-icon" />
            <div className="contact-element">
              <h3>Facebook</h3>
            </div>
          </div>
          <div className="contact-social">
            <BsInstagram className="contact-icon" />
            <div className="contact-element">
              <h3>Instagram</h3>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default ContactForm;
