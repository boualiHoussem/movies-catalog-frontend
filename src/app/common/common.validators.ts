import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";


export const MatchingPasswordValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {

  const password = group.get("password")?.value;
  const confirm = group.get("confirm")?.value;

  return !password || !confirm || password === confirm ? null : {matching: true}
}
