import { Routes } from '@angular/router';
import { EmployeeList } from './features/employee/employee-list/employee-list';
import { WorkshopItem } from './features/workshop/workshop-item/workshop-item';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full',
  },
  {
    path: 'employee',
    component: EmployeeList,
  },
  {
    path: 'workshop',
    component: WorkshopItem,
  },
];
