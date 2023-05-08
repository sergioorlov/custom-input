import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import {ReactiveFormEnum} from "../../enum/reactive-form.enum";
import {dateValidator} from "../../functions/validators";
import {ValidatorErrorTypesEnum} from "../../enum/errors.enum";
import {pattern} from "../../const/consts";

@Component({
  selector: 'reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveComponent implements OnInit {
  public reactiveForm!: FormGroup;

  protected readonly ReactiveFormEnum = ReactiveFormEnum;
  protected readonly ValidatorErrorTypesEnum = ValidatorErrorTypesEnum;
  protected readonly pattern = pattern;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.reactiveForm = this.fb.group({
      [ReactiveFormEnum.LOGIN_OF_INTERVIEWER]: this.fb.control([null], [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(pattern),
      ]),
      [ReactiveFormEnum.TECHNOLOGY_OF_INTERVIEW]: this.fb.control([null], [
        Validators.required,
        Validators.maxLength(6),
      ]),
      [ReactiveFormEnum.DATE_OF_INTERVIEW]: this.fb.control([null], [
        Validators.required,
        dateValidator.bind(this),
      ]),
    });
  }
}
