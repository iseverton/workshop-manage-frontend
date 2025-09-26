import { Employee } from '../employee/employee';

export interface workshop {
  id: number;
  name: string;
  description: string;
  eventDate: Date;
  createdById: number;
  employees: Employee[];
}
