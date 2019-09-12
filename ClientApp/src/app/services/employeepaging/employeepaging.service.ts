import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/empployee';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeePagingService {

  constructor(private http: HttpClient) { }

  findEmployee(courseId: string, filter = '', sortOrder = 'asc', pageNumber = 0, pageSize = 3): Observable<Employee[]> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('filter', filter);
    headers = headers.append('sortOrder', sortOrder);
    headers = headers.append('pageNumber', pageNumber.toString());
    headers = headers.append('pageSize', pageSize.toString());
    return this.http.get<Employee[]>('/api/SampleData/PagingEmployee', { headers }).pipe(
      tap(data => console.log(data)));
  }
}
