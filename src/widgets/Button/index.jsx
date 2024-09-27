import React from "react";
import "./index.css";
import resum from '../../resumefile/resum2.pdf'
const Button = (props) => {

 
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 text-center ftco-animate fadeInUp ftco-animated">
          <a href={resum} target="_blank" className="btn btn-primary py-4 px-5" >
            {props.BtnName}
          </a>
        </div>
      </div>
    </>
  );
};

export default Button;
