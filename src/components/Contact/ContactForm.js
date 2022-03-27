import React, { useRef, useState } from "react";
import Title from "../Title";
import { Formik, Field, Form } from "formik";
import emailjs from "emailjs-com";
import { AiOutlineClose } from "react-icons/ai";
const ContactForm = () => {
  const form = useRef();
  const [successInfo, setSuccessInfo] = useState(false);
  const sendEmail = (e) => {
    try {
      emailjs
        .sendForm(
          "gmail",
          "template_tt4hrs5",
          form.current,
          "unDjJ6HRupmNA3evy"
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
        onSubmit={(values) => {
          sendEmail();
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
                <AiOutlineClose
                  class="close-success-info"
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
    </section>
  );
};

export default ContactForm;
