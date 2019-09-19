import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormcheckcomponentComponent } from 'src/app/lb-component/formcheckcomponent/formcheckcomponent.component';
import { MatInputModule } from '@angular/material/input';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { MultiComboboxModule } from '../multi-combobox/multi-combobox.module';
import { MultiComboboxComponent } from '../multi-combobox/multi-combobox.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  declarations: [
    FormcheckcomponentComponent,
    FileSelectDirective
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MultiSelectAllModule,
    MultiComboboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule,

  ],
  exports: [
    FormcheckcomponentComponent
  ],
  entryComponents: [
    MultiComboboxComponent
  ],
})
export class FormcheckcomponentModule { }
