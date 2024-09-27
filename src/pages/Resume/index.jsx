import React, { forwardRef } from "react";
import "./index.css";
import HeadinContent from "../../widgets/HeadingContent";
import ResumeCard from "../../widgets/ResumeCard";
import Button from "../../widgets/Button";

const Resume = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="ftco-section ftco-no-pb resume-section">
        <div className="container">
          <HeadinContent
            h1Heading="Resume"
            h2Heading="Resume"
            paraName="-Seeking a positive in a leading organization which could provide stimulate in work culture give me opportunity to add value in my learning phase so as to carry out work effectively and efficiently in an organization in see my ability to inspire confidence and commitment other "
          />
          <div className="row d-flex">
            <div className="col-md-6">
              <ResumeCard date="2021-Present" about="I am currently persuing B.Tech (IT) final year from  SR Institution of Management & Technology BKT lucknow." college="SRIMT BKT,Lucknow" name="B.Tech (IT)"/>
              <ResumeCard date="2019-2021" about="I have completed my intermediate from  Mahatma Gandhi Inter College Safipur,Unnao" college="MGIC Safipur,Unnao" name="Science,Math" />
              <ResumeCard date="2017-2019" about="I have completed my high School from  Dayanand Shubhash National Public School Rasoolabad,Unnao" college="DSNPS Rasoolabad,Unnao" name="Science,Math" />
            </div>
            <div className="col-md-6">
            <ResumeCard date="2024-Present" about="I am currently doing internship in Lucknow .In this training we learn about  MERN STACK Technology " college="Skyview Smart Solution" name="Mern Stack"/>           
            <ResumeCard date="October 2023" about="I was attend the five days IOT workshop  from  AKTU This is IOT Based Project    and It  made by using C programming  " college="Dr. APJ Abdul Kalam University by C-DAC " name="IOT Workshop"/>
            <ResumeCard date="August 2023" about="I was join college training which is 45 days.In this training we learn about  MERN STACK Technology " college="SRIMT BKT,Lucknow " name="Mern Stack"/>
            </div> 
          </div>
          <Button BtnName="Download CV" />
        </div>
      </section>
    </>
  );
});

export default Resume;
