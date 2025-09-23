import { Component, inject, OnInit } from '@angular/core';
import { EmployeeItem } from '../employee-item/employee-item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  imports: [EmployeeItem],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {
  private http = inject(HttpClient);
  employee_list$ = [];
  ngOnInit(): void {
    this.http.get<any>('https://localhost:7289/api/Employee').subscribe((res) => {
      this.employee_list$ = res.data;
    });
  }
}
