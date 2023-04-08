import React from "react";
import { NavLink } from "react-router-dom";
import { FaYoutube, FaDiscord, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="Footer--main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-9 mx-auto">
              <div className="fbox d-flex align-content-center justify-content-between px-3">
                <div>
                  <h6>Ready to get started?</h6>
                  <h6>Talk to us today</h6>
                </div>
                <div>
                  <button className=" hireme-btn">
                    <NavLink to="/"> Get Started </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="">
          <div className="container">
            <div className="row row-cols-md-4">
              <div className="col ">
                <div className="footer-about">
                  <h6>Muhammad Asim</h6>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="col ">
                <div className="footer-subscribe">
                  <h6>Subscribe to get important updates</h6>
                  <form action="#">
                    <input
                      type="email"
                      name="email"
                      placeholder="YOUR E-MAIL"
                      className="mt-3"
                      style={{ caretColor: "violet" }}
                    />
                    <input
                      type="submit"
                      value="subscribe"
                      className="ffbtn"
                      style={{ caretColor: "violet" }}
                    />
                  </form>
                </div>
              </div>
              <div className="col ">
                <div className="d-flex flex-column" style={{ gap: "10px" }}>
                  <h6>Follow Us</h6>
                  <div className="d-flex" style={{ gap: "15px" }}>
                    <div>
                      <FaDiscord className="icons" />
                    </div>
                    <div>
                      <FaInstagram className="icons" />
                    </div>
                    <div>
                      <FaYoutube className="icons" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col ">
                <div>
                  <h6>Call Us</h6>
                  <h6>+91 12345678978</h6>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
