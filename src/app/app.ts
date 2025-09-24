import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeList } from './features/employee/employee-list/employee-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('workshop-manage-frontend');
}
