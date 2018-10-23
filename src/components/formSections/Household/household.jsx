import React from "react";
import { data, yesAndNo } from "./mock-data.js";
import Form from "../../common/form";
import FormRow from "../../common/formRow";
import { schema } from "./schema";

class Household extends Form {
  state = {
    data,
    errors: {}
  };

  schema = schema;

  render() {
    return (
      <div>
        <h3 style={{ color: "tan" }}>About your household</h3>
        <label>
          <strong>Name of Spouse or Significant Other</strong>
        </label>
        <FormRow
          inputOne={this.renderInput("spouse_first_name", "First Name")}
          inputTwo={this.renderInput("spouse_last_name", "Last Name")}
        />
        <FormRow
          inputOne={this.renderSelect(
            "children",
            "Do you have Children?",
            yesAndNo
          )}
          inputTwo={this.renderInput(
            "roommates",
            "List any additional people in the household"
          )}
        />
        <FormRow
          inputOne={this.renderInput(
            "caretaker",
            "Who will be responsible for Captain Morgan's care (the primary caretaker)?"
          )}
          inputTwo={this.renderInput(
            "caretaker_age",
            "What is the age of this primary caretaker?"
          )}
        />
        <FormRow
          inputOne={this.renderSelect(
            "allergies",
            "Has anyone in your household experienced allergies or asthma?",
            yesAndNo
          )}
          inputTwo={this.renderSelect(
            "cat_for_twenty_years",
            "Are you prepared to care for Captain Morgan for 15–20 years?",
            yesAndNo
          )}
        />
        {/* <FormRow
            inputOne={this.renderInput(
              "why_adopt",
              "Why are you looking to adopt Captain Morgan? Check all that apply"
            )}
          /> */}
        <div
          className="content-box"
          style={{ borderTop: "1px solid tan", margin: "30px 0 30px 0" }}
        />
      </div>
    );
  }
}

export default Household;
