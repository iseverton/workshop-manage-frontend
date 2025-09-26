import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { WorkshopItem } from '../workshop-item/workshop-item';
import { catchError, Observable, of, tap } from 'rxjs';
import { workshop } from '../workshop';
import { WorkshopService } from '../workshop.service';
import { AsyncPipe } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-workshop-list',
  imports: [AsyncPipe, MatExpansionModule],
  templateUrl: './workshop-list.html',
  styleUrl: './workshop-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkshopList {
  readonly panelOpenState = signal(false);

  workshop_list$!: Observable<workshop[]>;
  isLoading = true;

  private workshop_service = inject(WorkshopService);

  constructor() {
    this.workshop_list$ = this._getAll();
  }

  private _getAll(): Observable<workshop[]> {
    return this.workshop_service.getAll().pipe(
      tap((data) => ((this.isLoading = false), console.log('Workshops recebidos:', data))),
      catchError((error) => {
        this.isLoading = false;
        console.error(error);
        return of([]);
      })
    );
  }
}
