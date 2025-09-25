import { Component, inject, OnInit } from '@angular/core';
import { EmployeeItem } from '../employee-item/employee-item';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  imports: [EmployeeItem, AsyncPipe],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employee_list$!: Observable<Employee[]>;
  private employeeService = inject(EmployeeService);

  constructor() {
    this.employee_list$ = this.employeeService.getAll();
  }
}
