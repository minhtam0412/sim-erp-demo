import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridcomponentComponent } from 'src/app/lb-component/gridcomponent/gridcomponent.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule }    from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'; 


@NgModule({
  declarations: [
    GridcomponentComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports:[
    GridcomponentComponent
  ]
})
export class GridcomponentModule { }
