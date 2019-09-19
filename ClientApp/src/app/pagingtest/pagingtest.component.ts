import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/empployee';
import { EmployeeService } from '../services/employee/employee.service';
import { PagingParam } from '../models/paging';

@Component({
  selector: 'app-pagingtest',
  templateUrl: './pagingtest.component.html',
  styleUrls: ['./pagingtest.component.css']
})
export class PagingtestComponent implements OnInit {

  employee: Employee[];

  loading = false;
  total = 0;
  page = 1;
  limit = 20;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages(): void {
    this.loading = true;
    this.employeeService.getEmployeePaging(new PagingParam(this.limit, this.page)).subscribe(res => {
      console.log(res);
      this.total = res[0].totalRow;
      this.employee = res;
      this.loading = false;
    });
  }

  goToPage(n: number): void {
    this.page = n;
    this.getMessages();
  }

  onNext(): void {
    this.page++;
    this.getMessages();
  }

  onPrev(): void {
    this.page--;
    this.getMessages();
  }

}
