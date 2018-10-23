export const data = {
  spouse_first_name: "",
  spouse_last_name: "",
  children: "",
  roommates: "",
  caretaker: "",
  caretaker_age: "",
  allergies: "",
  cat_for_twenty_years: ""
  // why_adopt: "", //checkox
};

export const yesAndNo = [{ name: "Yes" }, { name: "No" }];

export function getOptions() {
  return yesAndNo.filter(g => g);
}
