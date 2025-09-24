import { Component, inject, OnInit } from '@angular/core';
import { EmployeeItem } from '../employee-item/employee-item';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  imports: [EmployeeItem, AsyncPipe],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  private http = inject(HttpClient);
  employee_list$!: Observable<Employee[]>;

  constructor() {
    this.employee_list$ = this.http
      .get<{ data: Employee[] }>('https://localhost:7289/api/Employee')
      .pipe(map((response) => response.data));
    console.log(this.employee_list$);
  }
}
