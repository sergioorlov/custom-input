import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {Directive} from "@angular/core";
import {dateValidator} from "../../functions/validators";

@Directive({
  selector: '[datePassed]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: DatePassedValidator,
    multi: true
  }]
})
export class DatePassedValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return dateValidator(control);
  }
}
