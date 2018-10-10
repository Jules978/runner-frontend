import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Run } from './run';
import { RUNS } from './mock-runs';
import { Training } from './training';
import { TRAININGS } from './mock-trainings';

@Injectable({
  providedIn: 'root'
})
export class RunService {

  private runSortedUrl = "http://localhost:8080/api/run/allsortbydate"
  private allTrainingsUrl = "http://localhost:8080/api/training/all"
  
  private baseRunUrl = "http://localhost:8080/api/run"




  getRuns(): Observable<Run[]> {
    const url = 'http://localhost:8080/api/run/allsortbydate'
    return this.http.get<Run[]>(url).pipe(
      catchError(this.handleError('getRuns', []))
    );
  }

  getUnfinishedRuns():Observable<Run[]> {
    const url = 'http://localhost:8080/api/run/unfinished'
    return this.http.get<Run[]>(url).pipe(
      catchError(this.handleError('getRuns', []))
    );
  }

  getRunById(id: number): Observable<Run> {
    const url = 'http://localhost:8080/api/run/${id}';
    return this.http.get<Run>(url).pipe(
      catchError(this.handleError<Run>('getRunById=${id}'))
    );
  }

  updateRun(run: Run): Observable<any> {
    const url = 'http://localhost:8080/api/run/${run.id}'
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(url, run, httpOptions).pipe(catchError(this.handleError<any>('updateTraining'))
    );
  }

  finishRun(run: Run): Observable<any> {
    const url = 'http://localhost:8080/api/run/finishrun/${training.id}'
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(url, run, httpOptions).pipe(catchError(this.handleError<any>('updateTraining'))
    );
  }


  deleteRun(run: Run | number): Observable<Run> {
    const id = typeof run === 'number' ? run : run.id;
    const url = 'http://localhost:8080/api/run/delete/${id}'
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.delete<Run>(url, httpOptions).pipe(
      catchError(this.handleError<Run>('deleteTraining'))
    );
  }

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
