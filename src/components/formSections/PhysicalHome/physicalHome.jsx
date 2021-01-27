import React from "react";
import { data, homeTypes, rentOrOwn } from "./mock-data.js";
import Form from "../../common/form";
import FormRow from "../../common/formRow";
import { schema } from "./schema";

class PhysicalHome extends Form {
  state = {
    data,
    errors: {}
  };

  schema = schema;

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default PhysicalHome;
