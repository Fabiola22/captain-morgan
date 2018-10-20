import React from "react";
import Form from "../common/form";
import FormRow from "../common/formRow";

import { schema } from "./schema";
import { data } from "./mock-data.js";
import FormSection from "../common/formSection";

class AdoptionForm extends Form {
  state = {
    data,
    errors: {}
  };

  schema = schema;

  render() {
    return (
      <div>
        <div className="row">
          <h3 className="text-center" style={{ color: "tan" }}>
            Cat Adoption Form
          </h3>
          <p>
            So you want to adopt Captain Morgan? Cool! First things first. This
            cat adoption questionnaire is first step of our adoption process,
            which also includes a home visit and the signing of an adoption
            contract.
          </p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <h3 style={{ color: "tan" }}>About You</h3>
          <FormRow
            inputOne={this.renderInput("first_name", "First Name")}
            inputTwo={this.renderInput("last_name", "Last Name")}
          />
          <FormRow
            inputOne={this.renderInput("occupation", "Occupation")}
            inputTwo={this.renderInput("phone_number", "Phone Number", "tel")}
          />
          <FormRow
            inputOne={this.renderInput("wechat", "Wechat ID")}
            inputTwo={this.renderInput("email", "Email", "email")}
          />
          <FormRow
            inputOne={this.renderInput("address", "Street Address")}
            inputTwo={this.renderInput("city", "City")}
          />
          <FormRow
            inputOne={this.renderInput("province", "State/Province")}
            inputTwo={this.renderInput("zip", "Zip Code")}
          />
          <FormRow
            colOne="col-md-4"
            inputOne={this.renderInput("country", "Country")}
          />
          <div
            className="content-box"
            style={{ borderTop: "1px solid tan", margin: "30px 0 30px 0" }}
          />
          <h3 style={{ color: "tan" }}>About your household</h3>
          <label>Name of Spouse or Significant Other</label>
          <FormRow
            inputOne={this.renderInput("spouse_first_name", "First Name")}
            inputTwo={this.renderInput("spouse_last_name", "Last Name")}
          />
          <FormRow
            inputOne={this.renderInput(
              "children",
              "Do you have Children?",
              "radio"
            )}
            inputTwo={this.renderInput(
              "roommates",
              "List any additional people in the household"
            )}
          />
          <FormRow
            inputOne={this.renderInput(
              "caretaker",
              "Who will be responsible for the cat's care (the primary caretaker)?"
            )}
            inputTwo={this.renderInput(
              "caretaker_ager",
              "What is the age of this primary caretaker?"
            )}
          />
          <FormRow colOne="col-lg-12" inputOne={this.renderButton("Submit")}>
            <h3>I Agree</h3>
            <p>
              I certify that all of the above information is true and accurate.
              I understand that if I adopt a pet from Kitten Rescue, this online
              form will become part of the adoption record.
            </p>
          </FormRow>
        </form>
      </div>
    );
  }
}

export default AdoptionForm;
