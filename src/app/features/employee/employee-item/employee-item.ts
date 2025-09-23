import { Component, input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-item',
  imports: [],
  templateUrl: './employee-item.html',
  styleUrl: './employee-item.css',
})
export class EmployeeItem {
  // recebe o colaborador por meio do componente pai
  employee = input.required<Employee>();
}
