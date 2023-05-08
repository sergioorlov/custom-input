import {AbstractControl, ValidationErrors} from "@angular/forms";
import {dateWithoutTimeToMilliseconds} from "../const/consts";

export function dateValidator(control: AbstractControl): ValidationErrors | null  {

  if (control.value) {
    const dateNow = dateWithoutTimeToMilliseconds(new Date());
    const controlDate = dateWithoutTimeToMilliseconds(new Date(control.value));

    return controlDate >= dateNow ? null : { datePassed: true };
  }

  return null;
}
