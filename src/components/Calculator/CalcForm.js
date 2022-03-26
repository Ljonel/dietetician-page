import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  imageAnimation,
  box,
  reveal,
  revealReverse,
  fromDown,
} from "../Animation";
import { useScroll } from "../useScroll";
import Title from "../Title";
import { Formik, Field, Form } from "formik";

const calcBtnHandler = (e) => {
  if (Formik.initialValues !== null) {
    document.getElementById("ppm-result").scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
};
const CalcForm = ({ ppm, setPPM }) => {
  const CalculatePPM = (values) => {
    if (values.sex === "kobieta") {
      const value = Math.floor(
        665.09 + 9.56 * values.weight + 1.85 * values.height - 4.67 * values.age
      );
      setPPM(value);
    } else {
      const value = Math.floor(
        665.09 + 9.56 * values.weight + 1.85 * values.height - 4.67 * values.age
      );
      setPPM(value);
    }
  };
  const [element, controls] = useScroll();

  return (
    <>
      <section id="calcForm">
        <Title word={"Kalkulator   PPM"} />
        <Formik
          initialValues={{
            sex: "kobieta",
            height: "",
            age: "",
            weight: "",
          }}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values) => {
            CalculatePPM(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="calc-form">
              <div className="row-1-group">
                <div className="row-element">
                  <label htmlFor="sex">Płeć</label>
                  <Field id="sex" as="select" name="sex" placeholder="Płeć">
                    <option value="kobieta">Kobieta</option>
                    <option value="mezczyzna">Męzczyzna</option>
                  </Field>
                  <div className="input-underline"></div>
                </div>
                <div className="row-element">
                  <label htmlFor="height">Wzrost [cm]</label>
                  <Field
                    id="height"
                    name="height"
                    placeholder="Wzrost"
                    type="number"
                    required
                    min="100"
                    max="250"
                  />
                  <div className="input-underline"></div>
                </div>
              </div>
              <div className="row-2-group">
                <div className="row-element">
                  <label htmlFor="age">Wiek</label>
                  <Field
                    id="age"
                    name="age"
                    placeholder="Wiek"
                    type="number"
                    required
                    min="5"
                    max="110"
                  />
                  <div className="input-underline"></div>
                </div>
                <div className="row-element">
                  <label htmlFor="weight">Waga [kg]</label>
                  <Field
                    id="weight"
                    name="weight"
                    placeholder="Waga"
                    type="number"
                    required
                    min="10"
                    max="200"
                  />
                  <div className="input-underline"></div>
                </div>
              </div>
              <button
                type="submit"
                className="calc-btn"
                onClick={() => setTimeout(calcBtnHandler, 500)}
              >
                Oblicz
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default CalcForm;
