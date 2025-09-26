import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE_URL } from '../../core/constants/api.constants';
import { workshop } from './workshop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkshopService {
  private http = inject(HttpClient);
  readonly url = `${API_BASE_URL}/Workshop`;

  getAll() {
    return this.http.get<{ data: workshop[] }>(this.url).pipe(map((res) => res.data));
  }
}
