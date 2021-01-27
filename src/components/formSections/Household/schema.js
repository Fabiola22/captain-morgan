import Joi from "joi-browser";

export const schema = {
  spouse_first_name: Joi.string().label("spouse_first_name"),
  spouse_last_name: Joi.string().label("spouse_last_name"),
  children: Joi.string()
    .required()
    .label("children"),
  roommates: Joi.string()
    .required()
    .label("roommates"),
  caretaker: Joi.string()
    .required()
    .label("caretaker"),
  caretaker_age: Joi.string()
    .required()
    .label("caretaker_age"),
  allergies: Joi.string()
    .required()
    .label("allergies"),
  cat_for_twenty_years: Joi.string()
    .required()
    .label("cat_for_twenty_years")
  // why_adopt: Joi.string()
  //   .required()
  //   .label("why_adopt"),
};
