import Joi from "joi-browser";

export const schema = {
  first_name: Joi.string()
    .required()
    .label("First Name"),
  last_name: Joi.string()
    .required()
    .label("Last Name"),
  occupation: Joi.string()
    .required()
    .label("Occupation"),
  phone_number: Joi.number()
    .integer()
    .required()
    .label("Phone Number"),
  wechat: Joi.string()
    .required()
    .label("Wechat"),
  email: Joi.string()
    .required()
    .email({ minDomainAtoms: 2 })
    .label("Email"),
  address: Joi.string()
    .required()
    .label("Address"),
  city: Joi.string()
    .required()
    .label("City"),
  province: Joi.string()
    .required()
    .label("Province"),
  zip: Joi.string()
    .required()
    .label("Zip Code"),
  country: Joi.string()
    .required()
    .label("Country")
};
