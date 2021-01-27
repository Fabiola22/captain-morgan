import React from "react";
import { data } from "./mock-data.js";
import Form from "../../common/form";
import FormRow from "../../common/formRow";
import { schema } from "./schema";

class CatCare extends Form {
  state = {
    data,
    errors: {}
  };

  schema = schema;

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default CatCare;
