import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LbComponentModule } from 'src/app/lb-component/lb-component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatProgressSpinnerModule, MatPaginatorModule, MatCardModule, MatPaginatorIntl } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { EmployeeInfoComponent } from './employee/employee-info/employee-info.component';
import { FormcheckcomponentComponent } from './lb-component/formcheckcomponent/formcheckcomponent.component';
import { EmployeeListPagingComponent } from './employee/employee-list/employee-list.component_v3';
import { AngularMaterialModule } from './materialmodule/angularmaterial/angularmaterial.module';
import { CustomPaginator } from './employee/employee-list/CustomPaginatorConfiguration';
import { InlineEditComponent } from './employee/inline-edit/inline-edit.component';


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
    component: EmployeeListPagingComponent
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
    EmployeeInfoComponent,
    EmployeeListPagingComponent,
    InlineEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LbComponentModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RouterModule.forRoot(routes),
  ],
  providers: [{ provide: MatPaginatorIntl, useValue: CustomPaginator() }],
  bootstrap: [AppComponent],
  entryComponents: [
    EmployeeInfoComponent
  ]
})
export class AppModule { }
