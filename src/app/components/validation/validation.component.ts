import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input} from '@angular/core';
import {AxControlComponent} from "../ax-control/ax-control.component";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {debounceTime, distinctUntilChanged} from "rxjs";
import {DELAY} from "../../const/consts";

@UntilDestroy()
@Component({
  selector: 'validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidationComponent implements AfterViewInit {
  @Input() when: string = '';

  public showError: boolean = false;

  constructor(private readonly axControl: AxControlComponent, private readonly cdr: ChangeDetectorRef) { }

  public ngAfterViewInit(): void {
    this.axControl?.formControl?.valueChanges
      .pipe(
        debounceTime(DELAY),
        distinctUntilChanged(),
        untilDestroyed(this),
      )
      .subscribe(() => {
        this.showError = this.axControl?.formControl?.invalid
          && this.axControl?.formControl?.dirty
          && !!this.axControl?.formControl?.errors?.hasOwnProperty(this.when);

        this.cdr.detectChanges();
      });
  }

}
