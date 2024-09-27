import React from "react";
import "./index.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import Item from "../../components/Navbar/Item";

const Footer = ({OnGetMenu}) => {
  return (
    <>
      <section className="footer-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="footer mb-4">
                <h2 className="footer-heading-2">About</h2>
                <p>
                A text description of an object in approximately one sentence; normally used for administrative and identification purposes. 
                </p>
                <ul className="sociacl-list unstyled">
                  <li>
                    <a href="https://www.linkedin.com/in/ranjeet-kumar-a57623275">
                      <span>
                        <FaLinkedin size={26} color="#fff" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ranjeetkumarui6">
                      <span>
                        <FaGithub size={26} color="#fff" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/kumaradranjeet">
                      <span>
                        <FaInstagram size={26} color="#fff" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="footer-2">
                <h2 className="footer-heading-2">Links</h2>
                <ul className="unstyle-list">
                  <li>
                   
                      <Item liname="Home" onClick={OnGetMenu} />
                  </li>
                  <li>
                   
                      <Item liname="About" onClick={OnGetMenu} />

                  </li>
                  <li>
                    
                      <Item liname="Project" onClick={OnGetMenu} />

                  </li>
                  <li>
                  
                      <Item liname="Contact" onClick={OnGetMenu} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="footer mb-4">
                <h2 className="footer-heading-2">Services</h2>
                <ul className="unstyle-list">
                  <li>
                    
                      <Item liname="Skills" onClick={OnGetMenu} />
                  </li>
                  <li>
                   
                      <Item liname="Resume" onClick={OnGetMenu} />
                  </li>
                  <li>
                   
            <Item liname="My Blog" onClick={OnGetMenu} />
                  
                  </li>
                  <li>
                    <a href="https://ranjeet-portfolio-1.netlify.app">
                      <span>
                        <FaLongArrowAltRight color="#999999" />
                      </span>
                     My Portfolio
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="footer mb-4">
                <h2 className="footer-heading-2">Have a Questions?</h2>
                <div className="question mb-3">
                  <ul>
                    <li>
                      <span>
                        <CiLocationOn />
                      </span>
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </li>
                    <li>
                      <span>
                        <IoIosCall />
                      </span>
                      +91 6392175188
                    </li>
                    <li>
                      <span>
                        <IoMdMail />
                      </span>
                      pathakvivek888111@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright ©2024 All rights reserved | This template is made with
                by ranjeetkumarui6
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
