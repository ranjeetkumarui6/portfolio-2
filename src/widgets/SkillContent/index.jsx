import React from "react";
import "./index.css";

const SkillContent = (props) => {
  return (
    <>
      <div className="col-md-6 animate-boxes">
        <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
          <h3>{props.skill}</h3>
          <div className="progress d-flex">
            <div className="progress-bar progress-bar-spinner progress-bar-animated">
              <span>70%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillContent;
