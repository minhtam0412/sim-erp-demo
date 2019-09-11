import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormcheckcomponentComponent } from 'src/app/lb-component/formcheckcomponent/formcheckcomponent.component';
import {MatInputModule} from '@angular/material/input';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MultiComboboxModule } from '../multi-combobox/multi-combobox.module';
import { MultiComboboxComponent } from '../multi-combobox/multi-combobox.component';

@NgModule({
  declarations: [
    FormcheckcomponentComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MultiSelectAllModule,
    MultiComboboxModule
  ],
  exports:[
    FormcheckcomponentComponent
  ],
  entryComponents: [
    MultiComboboxComponent
  ],
})
export class FormcheckcomponentModule { }
