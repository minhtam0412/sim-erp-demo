import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LbComponentModule } from 'src/app/lb-component/lb-component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule, MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { ProvinceModule } from './province/province.module';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogExampleComponent } from './example/MyDialog/dialog-example/dialog-example.component';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { EmployeeInfoComponent } from './employee/employee-info/employee-info.component';
import { FormcheckcomponentComponent } from './lb-component/formcheckcomponent/formcheckcomponent.component';


const routes: Routes = [
  // link default when page loaded
  {
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full'
  },
  // // link is invalid, redirect to homepage
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   redirectTo: '/'
  // },
  {
    path: 'employee',
    component: EmployeeListComponent
  },
  {
    path: 'formcheck',
    component: FormcheckcomponentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    NavMenuComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeUpdateComponent,
    DialogExampleComponent,
    EmployeeInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LbComponentModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    ProvinceModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    EmployeeAddComponent,
    EmployeeUpdateComponent,
    EmployeeInfoComponent
  ]
})
export class AppModule { }
