import React, { forwardRef } from "react";
import "./index.css";
import HeadinContent from "../../widgets/HeadingContent";
import Icon from "../../widgets/Icon";
import Button from "../../widgets/Button";
import { FaPhone } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoChrome } from "react-icons/io";

const Contact = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="contact-section">
        <div className="container">
          <HeadinContent
            h1Heading="Contact"
            h2Heading="Contact Me"
            paraName="Contacts are people associated with a project who can be contacted for various reasons. They can be internal or external to the organization, and include people like project managers, stakeholders, contractors, and surveyors."
          />
          <div className="row d-flex mb-5">
            <Icon
              Icon={<FaPhone color="#ffbd39" size={30} />}
              name="Address"
              paraName="Lucknow"
            />
            <Icon
              Icon={<FaPhone color="#ffbd39" size={30} />}
              name="Contact Number"
              paraName="+91 6393792577"
            />
            <Icon
              Icon={<FaTelegramPlane color="#ffbd39" size={40} />}
              name="Email Address"
              paraName="ranjeetkumar78734@gmail.com"
            />
            <Icon
              Icon={<IoLogoChrome color="#ffbd39" size={40} />}
              name="Website"
              paraName="ranjeet-Portfolio-1.netlify.app"
            />
          </div>
          <div className="row no-gutter block-9">
            <div className="col-md-6 d-flex">
              <div className="img"></div>
            </div>
            <div className="col-md-6 order-md-last d-flex">
              <form action="#" className="bg-light p-4 p-md-5 contact-from">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea name="" id="" cols="30" rows="7" />
                </div>
                <div className="form-group">
                  <Button BtnName="Send Message" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Contact;
