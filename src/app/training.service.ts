import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Run } from './run';
import { RUNS} from './mock-runs';
import { Training } from './training';
import { TRAININGS} from './mock-trainings';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  
  private allTrainingsUrl = "http://localhost:8080/api/training/all"

  getTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(this.allTrainingsUrl).pipe(
      catchError(this.handleError('getTrainings', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }
}
