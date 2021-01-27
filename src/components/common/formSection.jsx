import React from "react";
import FormRow from "./formRow";

const FormSection = ({ title, inputOne, inputTwo, colOne, colTwo }) => {
  return (
    <React.Fragment>
      <h3 style={{ color: "tan" }}>{title}</h3>
      {/* <FormRow
        inputOne={inputOne}
        inputTwo={inputTwo}
        colOne={colOne}
        colTwo={colTwo}
      /> */}
    </React.Fragment>
  );
};

export default FormSection;
