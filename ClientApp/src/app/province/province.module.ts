import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvinceListComponent } from './province-list/province-list.component';
import { ProvinceDetailComponent } from './province-detail/province-detail.component';
import { ProvinceComponent } from './province.component';
import { Routes, RouterModule, RouterOutlet} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatSelectModule, MatInputModule, MatOptionModule } from '@angular/material';

const routes: Routes = [
  {
    path: 'province',
    component: ProvinceComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ProvinceListComponent
      },
      {
        path: 'create',
        component: ProvinceDetailComponent
      },
      {
        path: 'detail',
        component: ProvinceDetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [ProvinceListComponent, ProvinceDetailComponent, ProvinceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule
  ]
})
export class ProvinceModule { }
