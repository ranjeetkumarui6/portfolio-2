import React from "react";
import "./index.css";

const ResumeCard = (props) => {
  return (
    <>
      <div className="resume-wrap ftco-animate fadeInUp ftco-animated">
        <span className="date">{props.date}</span>
        <h2>{props.name}</h2>
        <span>{props.college}</span>
        <p className="mt-4">
          {props.about}
          
        </p>
      </div>
    </>
  );
};

export default ResumeCard;
