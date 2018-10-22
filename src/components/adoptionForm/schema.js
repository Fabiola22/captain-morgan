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
    .label("Country"),
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
    .label("cat_for_twenty_years"),
  // why_adopt: Joi.string()
  //   .required()
  //   .label("why_adopt"),
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
    .label("litter_box"),
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
    .label("cant_keep_cat"),
  signature: Joi.string()
    .required()
    .label("signature"),
  date: Joi.date()
    .required()
    .label("today_date")
};
