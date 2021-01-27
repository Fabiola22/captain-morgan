import React from "react";

const FormRow = ({ colOne = "col", colTwo = "col", inputOne, inputTwo }) => {
  return (
    <div className="row">
      <div className={colOne}>{inputOne}</div>
      <div className={colTwo}>{inputTwo}</div>
    </div>
  );
};

export default FormRow;
