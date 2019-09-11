import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MultiComboboxComponent } from './multi-combobox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MultiComboboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  exports:[
    MultiComboboxComponent
  ]
})
export class MultiComboboxModule { }
