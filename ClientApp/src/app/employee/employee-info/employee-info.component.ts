import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Employee } from 'src/app/models/empployee';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  myGroup: any;
  @ViewChild('btnClose', { static: true }) cb: ElementRef;

  constructor(private dataService: EmployeeService, public dialogRef: MatDialogRef<EmployeeInfoComponent>, private route: Router, @Inject(MAT_DIALOG_DATA) public data: boolean) { }

  ngOnInit() {
    this.myGroup = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      gender: new FormControl(),
      email: new FormControl(),
      birthday: new FormControl(),
      issingle: new FormControl(),
      graduation: new FormControl(),
    });
  }
  submitData(formData) {
    let newEmp: any;
    newEmp = JSON.stringify(formData);
    console.log(this.myGroup.value);
    this.dataService.addEmployee_v2(newEmp).subscribe(res => {
      alert('Thêm nhân viên thành công');
      this.data = true;
      this.takeHome();
    });
  }


  takeHome() {
    this.dialogRef.close(this.data);
  }
}
