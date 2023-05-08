import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {TemplateDrivenComponent} from "./template-driven.component";
import {TemplateDrivenRoutingModule} from "./template-driven-routing.module";
import {AxControlModule} from "../../components/ax-control/ax-control.module";
import {ValidationModule} from "../../components/validation/validation.module";
import {DatePassedDirectiveModule} from "../../directives/date-passed/date-passed.directive.module";
import {MaxlengthDirectiveModule} from "../../directives/maxlength/maxlength.directive.module";

@NgModule({
  declarations: [
    TemplateDrivenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateDrivenRoutingModule,
    AxControlModule,
    ValidationModule,
    DatePassedDirectiveModule,
    MaxlengthDirectiveModule,
  ],
  exports: [TemplateDrivenComponent],
})
export class TemplateDrivenModule { }
