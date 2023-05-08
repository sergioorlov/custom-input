import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ValidationComponent} from "./validation.component";

@NgModule({
  declarations: [
    ValidationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ValidationComponent],
})
export class ValidationModule { }
