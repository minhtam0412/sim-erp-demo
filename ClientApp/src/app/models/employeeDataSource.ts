import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Employee } from './empployee';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { EmployeePagingService } from '../services/employeepaging/employeepaging.service';
import { finalize, catchError } from 'rxjs/operators';
export class EmployeeDataSource implements DataSource<Employee> {
    private employeeSubject = new BehaviorSubject<Employee[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();
    private countSubject = new BehaviorSubject<number>(0);
    public counter$ = this.countSubject.asObservable();

    constructor(private employeePagingService: EmployeePagingService, public totalRow: number) { }

    connect(collectionViewer: CollectionViewer): Observable<Employee[]> {
        return this.employeeSubject.asObservable();
    }

    data() {
        return this.employeeSubject.value;
    }

    update(data) {
        this.employeeSubject.next(data);
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.employeeSubject.complete();
        this.loadingSubject.complete();
        this.countSubject.complete();
    }

    loadEmployee(courseId: string, filter = '', sortDirection = 'asc', pageIndex = 0, pageSize = 3) {
        console.log('start call DB: ' + this.totalRow);
        this.loadingSubject.next(true);
        this.employeePagingService.findEmployee(courseId, filter, sortDirection, pageIndex, pageSize).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        ).subscribe(lessons => {
            this.employeeSubject.next(lessons);
            this.countSubject.next(lessons[0].totalRow);
        },
            err => console.log(err),
            () => { console.log('completed: ' + this.totalRow); });
        console.log('stop call DB' + this.totalRow);
    }

}
