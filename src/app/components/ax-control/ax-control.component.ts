import {AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, Input} from '@angular/core';
import {FormControl, FormControlDirective, FormControlName, NgModel} from "@angular/forms";

@Component({
  selector: 'ax-control',
  templateUrl: './ax-control.component.html',
  styleUrls: ['./ax-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AxControlComponent implements AfterContentInit {
  @Input() title: string = '';
  @ContentChild(FormControlName) reactiveControl!: FormControlName;
  @ContentChild(FormControlDirective) reactiveDirectiveControl!: FormControlDirective;
  @ContentChild(NgModel) templateDrivenControl!: NgModel;

  public formControl!: FormControl;

  public ngAfterContentInit(): void {
    switch (true) {
      case !!this.reactiveControl: this.formControl = this.reactiveControl?.control; break;
      case !!this.reactiveDirectiveControl: this.formControl = this.reactiveDirectiveControl?.control; break;
      case !!this.templateDrivenControl: this.formControl = this.templateDrivenControl?.control; break;
    }
  }

}
