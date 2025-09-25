import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { API_BASE_URL } from '../../core/constants/api.constants';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  readonly http = inject(HttpClient);
  readonly url = `${API_BASE_URL}/Employee`;

  getAll(): Observable<Employee[]> {
    return this.http.get<{ data: Employee[] }>(this.url).pipe(
      map((response) => response.data),
      catchError((error) => {
        console.log('error ao buscar funcionarios', error);
        return throwError(() => error);
      })
    );
  }
}
