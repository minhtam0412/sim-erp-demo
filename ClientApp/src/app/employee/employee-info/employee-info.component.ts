import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Employee } from 'src/app/models/empployee';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Function } from 'src/app/models/function';
import { style } from '@angular/animations';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css',],
})
export class EmployeeInfoComponent implements OnInit, AfterViewInit {
  myGroup: any;
  employeeInfo: any;
  addMode: boolean = true;
  Gender: any = [{ id: 1, name: 'Nam' }, { id: 2, name: 'Nữ' }]
  cols = ['functionId', 'functionName', 'functionNote'];
  datasource = new MatTableDataSource<Function>();
  functionData: Function[] = [];

  public arrayOfCities: any[] =
    [{ city: 'New York', state: 'New York', nickname: 'The Big Apple', population: '8,537,673' },
    { city: 'Los Angeles', state: 'California', nickname: 'City of Angels', population: '3,976,322' },
    { city: 'Chicago', state: 'Illinois', nickname: 'The Windy City', population: '2,704,958' },
    { city: 'Houston', state: 'Texas', nickname: 'Space City', population: '2,303,482' },
    { city: 'Phoenix', state: 'Arizona', nickname: 'Valley of the Sun', population: '1,615,017' },
    { city: 'Philadelphia', state: 'Pennsylvania', nickname: 'City of Brotherly Love', population: '1,567,872' },
    { city: 'San Antonio', state: 'Texas', nickname: 'Alamo City', population: '1,492,510' },
    { city: 'San Diego', state: 'California', nickname: 'America\'s Finest City', population: '1,406,630' },
    { city: 'Dallas', state: 'Texas', nickname: 'The Big D', population: '1,317,929' },
    { city: 'San Jose', state: 'California', nickname: 'Capital of Silicon Valley', population: '1,025,350' }];

  public cityHeaderTemplate = `
    <div class="row custom-row">
      <div class="col">City</div>
      <div class="col">State</div>
      <div class="col">NickName</div>
      <div class="col">Population</div>
    </div>`;

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
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {

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
      job: new FormControl(),
      citydata: new FormControl(),
      functionArray: this.fb.array([]),
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

  AddRow() {
    const functionArray = this.myGroup.controls['functionArray'] as FormArray;
    functionArray.push(this.fb.group({
      functionId: { value: '', disabled: true },
      functionName: '',
      functionNote: ''
    }));
    this.functionData.push({ functionId: '1', functionName: '', functionNote: '' });
    this.datasource = new MatTableDataSource(this.functionData);
  }

  changeName(value: any, index: any) {
    const functionArray = this.myGroup.controls.functionArray;
    functionArray.controls[index].controls.functionNote.setValue('Fucntion Name: ' + value);
    console.log('value: ' + value + ' index: ' + index);
  }

  onKeydown(event, index) {
    if (event.key === "Enter") {
      console.log(event);
    }
  }

  updateJobData($event) {
    if ($event == null || $event == undefined) { return; }
    this.myGroup.controls.job.setValue($event);
  }

  public renderCity(data: any): string {
    const html = `
      <div class="row data-row">
        <div class="col">${data.city}</div>
        <div class="col">${data.state}</div>
        <div class="col">${data.nickname}</div>
        <div class="col">${data.population}</div>
      </div>`;

    return html;
  }

  myCallback(event) {
    console.log(event);
    // this.myGroup.controls['citydata'].setValue(event.city);
    // console.log('city data: ' + this.myGroup.controls['citydata'].value);
  }
}
