import React from "react";
import monkey1 from "../images/monkey1.jpeg";

const FormSubmitted = () => {
  return (
    <div>
      <h3 className="text-center">
        Thank you for submitting your catplication! we'll in touch soon
      </h3>
      <img
        src={monkey1}
        className="responsive"
        alt="homepic"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%"
        }}
      />
    </div>
  );
};

export default FormSubmitted;
