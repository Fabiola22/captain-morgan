export const data = {
  first_name: "", // ABOUT YOU
  last_name: "",
  occupation: "",
  phone_number: "",
  wechat: "",
  email: "",
  address: "",
  city: "",
  province: "",
  zip: "",
  country: "",
  spouse_first_name: "",
  spouse_last_name: "",
  children: "",
  roommates: "",
  caretaker: "",
  caretaker_age: "",
  allergies: "",
  cat_for_twenty_years: "",
  // why_adopt: "", //checkox
  home_type: "",
  plans_to_move: "",
  rent_or_own: "",
  cat_allowed: "",
  litter_box: "",
  hours_cat_alone: "",
  where_cat_alone: "",
  indoor_outdoor: "",
  first_pet: "",
  any_pets: "",
  pet_kind: "",
  vet_first_name: "",
  vet_last_name: "",
  vet_phone_number: "",
  unacceptable_cat_behaviour: "",
  cant_keep_cat: "",
  signature: "",
  date: ""
};

export const yesAndNo = [{ name: "Yes" }, { name: "No" }];
export const homeTypes = [
  { name: "House" },
  { name: "Apartment" },
  { name: "Studio" },
  { name: "Condo" },
  { name: "Duplex" },
  { name: "Other" }
];

export const rentOrOwn = [{ name: "Rent" }, { name: "Own" }];
export function getOptions() {
  return yesAndNo.filter(g => g);
}
