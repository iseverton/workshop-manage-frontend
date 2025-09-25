import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeList } from './features/employee/employee-list/employee-list';
import { TabMenu } from './core/components/tab-menu/tab-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabMenu],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('workshop-manage-frontend');
}
