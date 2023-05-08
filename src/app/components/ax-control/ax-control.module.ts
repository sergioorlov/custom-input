import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AxControlComponent} from "./ax-control.component";

@NgModule({
  declarations: [
    AxControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AxControlComponent],
})
export class AxControlModule { }
