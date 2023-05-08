import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {Directive, Input} from "@angular/core";

@Directive({
  selector: '[length]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaxlengthDirective,
    multi: true
  }]
})
export class MaxlengthDirective implements Validator {
  @Input('length') size: string = '';
  validate(control: AbstractControl): ValidationErrors | null {
    return control?.value?.length > Number(this.size) ? { 'maxlength': true } : null;
  }
}
