import React from "react";
import { data } from "./mock-data.js";
import Form from "../../common/form";
import FormRow from "../../common/formRow";
import { schema } from "./schema";

class AboutYou extends Form {
  state = {
    data,
    errors: {}
  };

  schema = schema;

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default AboutYou;
