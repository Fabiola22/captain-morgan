import Joi from "joi-browser";

export const schema = {
  signature: Joi.string()
    .required()
    .label("signature"),
  date: Joi.date()
    .required()
    .label("today_date")
};
