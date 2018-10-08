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
export class RunService {

  private runSortedUrl = "http://localhost:8080/api/run/sortbydate"
  private allTrainingsUrl = "http://localhost:8080/api/training/all"
  private baseRunUrl = "http://localhost:8080/api/run"
  private updateRunUrl = "https://localhost:8080/api/run/update"
  
    
  

  getRuns(): Observable<Run[]> {
    return this.http.get<Run[]>(this.runSortedUrl).pipe(
      catchError(this.handleError('getRuns', []))
    );
  }

  getRunById(id:number): Observable<Run> {
    const url='{this.baseRunUrl}/${id}';
    return this.http.get<Run>(url).pipe(
      catchError(this.handleError<Run>('getRunById=${id}'))
    );
  }

  UpdateRun(run: Run): Observable<any> {
    const url = '{this.updateRunUrl}/${hero.id}'
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(url, run, httpOptions).pipe(catchError(this.handleError<any>('updateHero')));
  }

  get Trainings(): Observable<Training[]> {
    return of (TRAININGS);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      console.error(error); 
   
      return of(result as T);
    };
  }
  
  constructor(private http: HttpClient) { }
}
