import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllItemsComponent } from './all-items/all-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllItemsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AllItemsComponent
  ]
})
export class ComponentsModule { }
