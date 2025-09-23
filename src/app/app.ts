import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RequestTest } from "./components/request-test/request-test";
import { EmployeeList } from "./features/employee/employee-list/employee-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RequestTest, EmployeeList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('workshop-manage-frontend');
}
