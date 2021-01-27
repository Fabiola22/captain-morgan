import React from "react";
import Form from "../common/form";
import FormRow from "../common/formRow";

import { schema } from "./schema";
import { data, yesAndNo, homeTypes, rentOrOwn } from "./mock-data.js";

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
          <h3 style={{ color: "tan" }}>About your Physical home</h3>
          <FormRow
            inputOne={this.renderSelect(
              "home_type",
              "What kind of home do you live in?",
              homeTypes
            )}
            inputTwo={this.renderInput(
              "plans_to_move",
              "How long have you lived at this address?"
            )}
          />
          <FormRow
            inputOne={this.renderSelect(
              "rent_or_own",
              "Do you rent or own your home?",
              rentOrOwn
            )}
            inputTwo={this.renderInput(
              "cat_allowed",
              "In what areas of your home will Captain Morgan be allowed?"
            )}
          />
          <FormRow
            inputOne={this.renderInput(
              "litter_box",
              "Where will you keep the litter box?"
            )}
          />
          <div
            className="content-box"
            style={{ borderTop: "1px solid tan", margin: "30px 0 30px 0" }}
          />
          <h3 style={{ color: "tan" }}>Cat care and other Pets</h3>
          <FormRow
            inputTwo={this.renderInput(
              "hours_cat_alone",
              "How many hours a day will Captain Morgan be left alone?"
            )}
            inputOne={this.renderInput(
              "where_cat_alone",
              "Where will Captain Morgan be left when alone?"
            )}
          />
          <FormRow
            inputTwo={this.renderInput(
              "indoor_outdoor",
              "Will Captain Morgan be an indoor or outdoor pet?"
            )}
            inputOne={this.renderInput("first_pet", "Is this your first pet?")}
          />
          <FormRow
            inputTwo={this.renderInput(
              "any_pets",
              "Do you currently have any other pets?"
            )}
            inputOne={this.renderInput(
              "pet_kind",
              "What kind of pets do you currently have?"
            )}
          />
          <label>
            <strong>Name of current Veterinarian</strong>
          </label>
          <FormRow
            inputOne={this.renderInput("vet_first_name", "First Name")}
            inputTwo={this.renderInput("vet_last_name", "Last Name")}
          />
          <FormRow
            inputOne={this.renderInput(
              "vet_phone_number",
              "Veterinarian's phone number"
            )}
          />
          <FormRow
            colOne="col-lg-12"
            inputOne={this.renderInput(
              "unacceptable_cat_behaviour",
              "Is there a cat behavior that would not be acceptable to you?"
            )}
          />
          <FormRow
            colOne="col-lg-12"
            inputOne={this.renderInput(
              "cant_keep_cat",
              "Were you ever in a situation where you were not able to keep Captain Morgan?"
            )}
          />
          <h3 style={{ color: "red" }}>I Agree</h3>
          <p>
            I certify that all of the above information is true and accurate. I
            understand that if I adopt Captain Morgan, this online form will
            become part of the adoption record.
          </p>
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
          <FormRow colOne="col-lg-12" inputOne={this.renderButton("Submit")} />
        </form>
      </div>
    );
  }
}

export default AdoptionForm;
