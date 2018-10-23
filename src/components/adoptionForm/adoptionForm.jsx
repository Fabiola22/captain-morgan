import React from "react";
import Form from "../common/form";
import FormRow from "../common/formRow";

import { schema } from "./schema";
import { data } from "./mock-data.js";
import Calendar from "react-calendar";
import AboutYou from "../formSections/AboutYou/aboutYou";
import PhysicalHome from "../formSections/PhysicalHome/physicalHome";
import Household from "../formSections/Household/household";
import CatCare from "../formSections/CatCare/catCare";

class AdoptionForm extends Form {
  state = {
    data,
    errors: {},
    date: new Date()
  };

  change = date => {
    this.setState({ date });
  };

  schema = schema;

  render() {
    return (
      <div>
        <div className="row">
          <h3 className="text-center" style={{ color: "tan" }}>
            Captain Morgan Adoption Form
          </h3>
          <p>
            So you want to adopt Captain Morgan? Cool! First things first. This
            cat adoption questionnaire is first step of our adoption process,
            which also includes a home visit and the signing of an adoption
            contract.
          </p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <AboutYou />
          <PhysicalHome />
          <Household />
          <CatCare />
          <h3 style={{ color: "red" }}>I Agree</h3>
          <p>
            I certify that all of the above information is true and accurate. I
            understand that if I adopt Captain Morgan, this online form will
            become part of the adoption record.
          </p>
          <div
            className="content-box"
            style={{ borderTop: "1px solid tan", margin: "30px 0 30px 0" }}
          />
          <FormRow
            inputOne={this.renderInput(
              "signature",
              "Full Legal Name (as Signature)"
            )}
          />
          <label>
            <strong>Today's date: </strong>
            <span style={{ color: "red" }}>
              {this.state.date.toDateString()}
            </span>
          </label>
          <Calendar onChange={this.change} value={this.state.date} />
          <br />
          <FormRow colOne="col-lg-12" inputOne={this.renderButton("Submit")} />
        </form>
      </div>
    );
  }
}

export default AdoptionForm;
