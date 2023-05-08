import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ReactiveComponent} from "./reactive.component";
import {ReactiveRoutingModule} from "./reactive-routing.module";
import {AxControlModule} from "../../components/ax-control/ax-control.module";
import {ValidationModule} from "../../components/validation/validation.module";

@NgModule({
  declarations: [
    ReactiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveRoutingModule,
    AxControlModule,
    ValidationModule
  ],
  exports: [ReactiveComponent],
})
export class ReactiveModule { }
