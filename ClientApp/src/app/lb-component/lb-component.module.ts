import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LbComponentComponent } from 'src/app/lb-component/lb-component.component';
import { CartcomponentModule } from 'src/app/lb-component/cartcomponent/cartcomponent.module';
import { FormcheckcomponentModule } from 'src/app/lb-component/formcheckcomponent/formcheckcomponent.module';
import { GridcomponentModule } from 'src/app/lb-component/gridcomponent/gridcomponent.module';


@NgModule({
  declarations: [
    LbComponentComponent,
  ],
  imports: [
    CommonModule,
    CartcomponentModule,
    GridcomponentModule,
  ],
  exports: [
    CartcomponentModule,
    FormcheckcomponentModule,
    GridcomponentModule,
  ]
})
export class LbComponentModule { }
