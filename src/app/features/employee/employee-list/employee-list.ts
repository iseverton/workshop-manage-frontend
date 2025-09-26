import { Component, inject } from '@angular/core';
import { EmployeeItem } from '../employee-item/employee-item';
import { catchError, Observable, of, tap } from 'rxjs';
import { Employee } from '../employee';
import { AsyncPipe } from '@angular/common';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  imports: [EmployeeItem, AsyncPipe],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employee_list$!: Observable<Employee[]>;
  isloading = true;

  private _employeeService = inject(EmployeeService);

  constructor() {
    this.employee_list$ = this._getAll();
  }

  private _getAll(): Observable<Employee[]> {
    return this._employeeService.getAll().pipe(
      tap(() => (this.isloading = false)),
      catchError((err) => {
        console.error(err);
        this.isloading = false;
        return of([]);
      })
    );
  }
}
