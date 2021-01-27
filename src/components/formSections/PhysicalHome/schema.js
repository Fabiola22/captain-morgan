import Joi from "joi-browser";

export const schema = {
  home_type: Joi.string()
    .required()
    .label("home_type"),
  plans_to_move: Joi.string()
    .required()
    .label("plans_to_move"),
  rent_or_own: Joi.string()
    .required()
    .label("rent_or_own"),
  cat_allowed: Joi.string()
    .required()
    .label("cat_allowed"),
  litter_box: Joi.string()
    .required()
    .label("litter_box")
};
