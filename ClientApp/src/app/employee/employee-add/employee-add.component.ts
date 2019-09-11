import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Employee } from 'src/app/models/empployee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Router } from '@angular/router';
import { NgForm, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;


export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class EmployeeAddComponent implements OnInit {

  @Input() clearData: boolean = false;
  @Output() nameEvent = new EventEmitter<string>();
  objTmpEmp: Employee;
  @Input() objemp: Employee;
  @ViewChild('closeBtn', { static: false }) cb: ElementRef;
  date = new FormControl(moment());
  
  constructor(private dataservice: EmployeeService, private route: Router, public dialogRef: MatDialogRef<EmployeeAddComponent>) { }

  ngOnInit() {
    this.ResetValues();
    this.objemp = new Employee();
  }

  ResetValues() {
  }

  Register(regForm: NgForm) {
    this.objTmpEmp = new Employee();
    this.objTmpEmp.email = regForm.value.email;
    this.objTmpEmp.firstname = regForm.value.firstname;
    this.objTmpEmp.lastname = regForm.value.lastname;
    this.objTmpEmp.gender = regForm.value.gender;
    this.objTmpEmp.birthday = regForm.value.birthday;
    this.objTmpEmp.issingle = regForm.value.issingle;
    this.objTmpEmp.graduation = regForm.value.graduation;
    this.dataservice.addEmployee(this.objTmpEmp).subscribe(res => {
      alert('Thêm nhân viên thành công');
      this.TakeHome();
    });
  }

  TakeHome() {
    this.cb.nativeElement.click();
    this.route.navigate(['/employee']);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
