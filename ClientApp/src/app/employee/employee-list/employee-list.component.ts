import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';
import { Employee } from 'src/app/models/empployee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeInfoComponent } from '../employee-info/employee-info.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component_v2.html',
  styleUrls: ['./employee-list.component_v2.css']
})
export class EmployeeListComponent implements OnInit, AfterViewInit {
  employeelist: Employee[];
  dataAvailable: Boolean = false;
  empTmp: Employee;
  dataSource = new MatTableDataSource<Employee>();
  displayedColumns: string[] = ['position', 'fname', 'lname', 'email', 'gender', 'birthday', 'issingle', 'graduation', 'detail', 'delete'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  rowSelected: Employee;

  ngAfterViewInit(): void {
    this.loadData();
  }

  constructor(private dataservice: EmployeeService, private route: Router, public dialog: MatDialog) {
  }

  ngOnInit() {
    console.log(this.sort);
  }

  loadData() {
    this.dataservice.getEmployee().subscribe((template) => {
      this.employeelist = template;
      for (let index = 0; index < this.employeelist.length; index++) {
        this.employeelist[index].position = index + 1;
      }
      this.dataSource = new MatTableDataSource(this.employeelist);
      this.dataSource.sort = this.sort;
      console.log(this.employeelist);
      if (this.employeelist.length > 0) {
        this.dataAvailable = true;
      } else {
        this.dataAvailable = false;
      }
    }, err => {
      console.log(err);
    });
  }

  deleteConfirmation(id: string) {
    if (confirm('Bạn có chắc muốn xoá dữ liệu đang chọn?')) {
      this.empTmp = new Employee();
      this.empTmp.id = id;
      this.dataservice.delEmployee(this.empTmp).subscribe((res) => {
        alert('Xoá thành công!');
        this.loadData();
      }, err => {
        console.log(err);
      });
    }
  }

  loadNewForm(id: string, email: string, firstName: string, lastName: string, gender: number) {
    this.rowSelected = new Employee();
    this.rowSelected.id = id;
    this.rowSelected.firstname = firstName;
    this.rowSelected.lastname = lastName;
    this.rowSelected.gender = gender;
    this.rowSelected.email = email;
  }
  refreshData() {
    this.loadData();
  }

  openAddDialog(id?: string): void {

    const dialogRef = this.dialog.open(EmployeeInfoComponent, {
      width: '600px', maxHeight: '600px', data: { employeeId: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result != undefined && result.isSuccess != undefined && result.isSuccess == true) {
        this.refreshData();
      }
    });
  }

  onRowClicked(row) {
    console.log(row);
  }


}
