import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
export class EmployeeInfoComponent implements OnInit, AfterViewInit {
  myGroup: any;
  employeeInfo: any;
  addMode: boolean = true;
  Gender: any = [{ id: 1, name: 'Nam' }, { id: 2, name: 'Nữ' }]

  ngAfterViewInit(): void {
    if (this.data != undefined) {
      if (this.data.employeeId != undefined) {
        this.addMode = false;
        this.getEmployeeInfo(this.data.employeeId);
      }

    }
  }

  constructor(private dataService: EmployeeService, public dialogRef: MatDialogRef<EmployeeInfoComponent>,
    private route: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit() {
    this.myGroup = new FormGroup({
      id: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
      gender: new FormControl(1),
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
    if (this.addMode) {
      this.dataService.addEmployee_v2(newEmp).subscribe(res => {
        alert('Thêm nhân viên thành công!');
        this.data.isSuccess = true;
        this.takeHome();
      }, err => {
        alert('Thêm nhân viên thất bại!');
        this.data.isSuccess = false;
      });
    } else {
      this.dataService.updateEmployee(this.employeeInfo.id, newEmp).subscribe(res => {
        alert('Cập nhật viên thành công!');
        this.data.isSuccess = true;
        this.takeHome();
      }, err => {
        alert('Cập nhật viên thất bại!');
        this.data.isSuccess = false;
      });
    }

  }

  getEmployeeInfo(id: string) {
    this.dataService.getInfoEmployee(id).subscribe(res => {
      this.employeeInfo = new Employee();
      this.employeeInfo = res;
      if (this.employeeInfo != undefined) {
        this.myGroup.patchValue(this.employeeInfo);
      }
    }, err => {
      alert('Lỗi lấy thông tin nhân viên!');
    });
  }


  takeHome() {
    this.dialogRef.close(this.data);
  }
}
