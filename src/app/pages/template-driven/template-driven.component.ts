import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ReactiveFormEnum} from "../../enum/reactive-form.enum";
import {ValidatorErrorTypesEnum} from "../../enum/errors.enum";
import {pattern} from "../../const/consts";

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateDrivenComponent {
  protected readonly ReactiveFormEnum = ReactiveFormEnum;
  protected readonly ValidatorErrorTypesEnum = ValidatorErrorTypesEnum;
  protected readonly pattern = pattern;
}
