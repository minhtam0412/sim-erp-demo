import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/empployee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})

export class EmployeeUpdateComponent implements OnInit {

  constructor(private dataservice: EmployeeService, private route: Router, public dialogRef: MatDialogRef<EmployeeUpdateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Employee) {
    console.log(data);
  }
  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn', null) cb: ElementRef;

  @Input() reset: Boolean = true;
  @ViewChild('regForm', null) myForm: NgForm;
  objTmpEmp: Employee;
  @Input() objEmp: Employee = new Employee();


  ngOnInit() {
  }

  editEmployee(regForm: NgForm) {
    this.dataservice.editEmployee(this.data).subscribe(res => {
      alert('Cập nhật thành công!');
      this.cb.nativeElement.click();
    });
  }

  closeUpdateDialog() {
    this.dialogRef.close();
  }
}
