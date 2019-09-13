import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';
import { EmployeeDataSource } from 'src/app/models/employeeDataSource';
import { EmployeePagingService } from 'src/app/services/employeepaging/employeepaging.service';
import { Employee } from 'src/app/models/empployee';
import { MatPaginator, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { merge } from 'rxjs';
import { EmployeeInfoComponent } from '../employee-info/employee-info.component';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component_v3.html',
    styleUrls: ['./employee-list.component_v2.css']
})
export class EmployeeListPagingComponent implements OnInit, AfterViewInit {

    course: Employee;
    dataSource: EmployeeDataSource;
    hasRecord: boolean;
    displayedColumns: string[] = ['position', 'fname', 'lname', 'email', 'gender', 'birthday', 'issingle', 'graduation', 'detail', 'delete'];
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    totalRow: number;
    empTmp: Employee;


    constructor(private dataService: EmployeeService, private employeePagingService: EmployeePagingService, private route: ActivatedRoute, public dialog: MatDialog) { }

    ngOnInit(): void {
        this.course = this.route.snapshot.data["course"];
        this.dataSource = new EmployeeDataSource(this.employeePagingService, this.totalRow);
        this.dataSource.loadEmployee('', '', 'asc', 0, 10);
        console.log('after call loadEmployee');
    }

    ngAfterViewInit(): void {
        this.dataSource.counter$
            .pipe(
                tap((count) => {
                    this.paginator.length = count;
                })
            )
            .subscribe();
        this.paginator.page
            .pipe(
                tap(() => this.loadEmployeePage())
            )
            .subscribe();
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(() => this.loadEmployeePage())
            )
            .subscribe();
    }

    loadEmployeePage() {
        this.dataSource.loadEmployee('', '', 'asc', this.paginator.pageIndex, this.paginator.pageSize);
    }

    openDialog(id?: string): void {

        const dialogRef = this.dialog.open(EmployeeInfoComponent, {
            width: '800px', maxHeight: '600px', data: { employeeId: id }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            if (result != undefined && result.isSuccess != undefined && result.isSuccess == true) {
                this.loadEmployeePage();
            }
        });
    }


    deleteConfirmation(id: string) {
        if (confirm('Bạn có chắc muốn xoá dữ liệu đang chọn?')) {
            this.empTmp = new Employee();
            this.empTmp.id = id;
            this.dataService.delEmployee(this.empTmp).subscribe((res) => {
                alert('Xoá thành công!');
                this.loadEmployeePage();
            }, err => {
                console.log(err);
            });
        }
    }

    onRowClicked(row) {
        console.log(row);
    }

}
