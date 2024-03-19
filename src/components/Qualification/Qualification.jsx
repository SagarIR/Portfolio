import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Secondary School Certificate (SSC)</h3>
                <span className="qualification__subtitle">
                  Nutan - Vidyalay (83%)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">{" "}2015 - 2016</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification__subtitle">
                  LaNet Team Software Solutions - Surat
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">{" "}06/2022 - 08/2022</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Higher Secondary School (Science)</h3>
                <span className="qualification__subtitle">
                  Nutan - Vidyalay (84%)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">{" "}2016 - 2018</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">
                  Lanet Team Software Solutions - Surat
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">{" "}08/2022 - 09/2023</i>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.E.(Computer Engineering)</h3>
                <span className="qualification__subtitle">
                  SVIT - Vasad (8.4)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">{" "}2018 - 2022</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">FrontEnd Developer</h3>
                <span className="qualification__subtitle">
                  Anant Soft Computing - Vadodara
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">{" "}09/2023 - Present</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Internship & Training</h3>
                <span className="qualification__subtitle">LaNet Team Software Solutions - Surat</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">{" "}01/2022 - 06/2022</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Qualification;
