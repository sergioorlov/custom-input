import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {MaxlengthDirective} from "./maxlength.directive";

@NgModule({
  declarations: [
    MaxlengthDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [MaxlengthDirective],
})
export class MaxlengthDirectiveModule { }
