import Joi from "joi-browser";

export const schema = {
  hours_cat_alone: Joi.string()
    .required()
    .label("hours_cat_alone"),
  where_cat_alone: Joi.string()
    .required()
    .label("where_cat_alone"),
  indoor_outdoor: Joi.string()
    .required()
    .label("indoor_outdoor"),
  first_pet: Joi.string()
    .required()
    .label("first_pet"),
  any_pets: Joi.string()
    .required()
    .label("any_pets"),
  pet_kind: Joi.string()
    .required()
    .label("pet_kind"),
  vet_first_name: Joi.string()
    .required()
    .label("vet_first_name"),
  vet_last_name: Joi.string()
    .required()
    .label("vet_last_name"),
  vet_phone_number: Joi.number()
    .integer()
    .required()
    .label("vet_phone_number"),
  unacceptable_cat_behaviour: Joi.string()
    .required()
    .label("unacceptable_cat_behaviour"),
  cant_keep_cat: Joi.string()
    .required()
    .label("cant_keep_cat")
};
