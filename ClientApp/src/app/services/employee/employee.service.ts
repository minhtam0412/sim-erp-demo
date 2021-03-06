import { Injectable } from '@angular/core';
import { ROOT_URL } from 'src/app/models/config';
import { Employee } from 'src/app/models/empployee';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PagingParam } from 'src/app/models/paging';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployee() {
    return this.http.get<Employee[]>(ROOT_URL + 'SampleData/GetListEmployee');
  }

  getEmployeePaging(pagingParam: PagingParam) {
    console.log(pagingParam);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<Employee[]>(ROOT_URL + 'SampleData/GetListPaging/', JSON.stringify(pagingParam), { headers });
  }

  addEmployee(emp: Employee) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Fname: emp.firstname,
      Lname: emp.lastname,
      Email: emp.email,
      Gender: emp.gender,
      ID: 0,
      Birthday: emp.birthday,
      Issingle: emp.issingle,
      Graduation: emp.graduation

    };
    return this.http.post<Employee>(ROOT_URL + 'SampleData/AddEmployee', JSON.stringify(body), { headers });
  }

  addEmployee_v2(jsonEmp: string) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<Employee>(ROOT_URL + 'SampleData/AddEmployee', jsonEmp, { headers });
  }

  editEmployee(emp: Employee) {
    console.log(emp);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Fname: emp.firstname,
      Lname: emp.lastname,
      Email: emp.email,
      Gender: emp.gender,
      ID: emp.id
    };
    return this.http.put<Employee>(ROOT_URL + 'SampleData/' + emp.id, body, { headers });
  }

  updateEmployee(id: string, emp: any) {
    console.log(emp);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    const body = emp;
    return this.http.put<Employee>(ROOT_URL + 'SampleData/' + id, body, { headers });
  }

  getInfoEmployee(id: string) {
    return this.http.get<Employee>(ROOT_URL + 'SampleData/' + id);
  }

  delEmployee(emp: Employee) {
    const url = ROOT_URL + 'SampleData/DeleteEmployee/' + emp.id;
    return this.http.delete<Employee>(url);
  }
}
