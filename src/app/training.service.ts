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
  private baseTrianingUrl = "http://localhost:8080/api/training"
  private allTrainingsUrl = "http://localhost:8080/api/training/all"

  getTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(this.allTrainingsUrl).pipe(
      catchError(this.handleError('getTrainings', []))
    );
  }

  addRun(training: Training): Observable<Training> {
    const url = '{this.baseTrainingUrl}/add'
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Training>(url, training, httpOptions).pipe(
      catchError(this.handleError<Training>('addTraining'))
    );
  }
  updateRun(training: Training): Observable<any> {
    const url = '{this.baseTrainingUrl}/update/${training.id}'
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(url, training, httpOptions).pipe(catchError(this.handleError<any>('updateTraining'))
    );
  }

  deleteRun(training: Training | number): Observable<Training> {
    const id = typeof training === 'number' ? training : training.id;
    const url = '{this.baseTrainingUrl}/delete/${id}'
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.delete<Training>(url, httpOptions).pipe(
      catchError(this.handleError<Training>('deleteTraining'))
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
