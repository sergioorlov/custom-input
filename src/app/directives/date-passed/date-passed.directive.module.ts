import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {DatePassedValidator} from "./date-passed.directive";

@NgModule({
  declarations: [
    DatePassedValidator
  ],
  imports: [
    CommonModule,
  ],
  exports: [DatePassedValidator],
})
export class DatePassedDirectiveModule { }
