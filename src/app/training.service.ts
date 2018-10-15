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

   updateTraining(training: Training): void {
   
    const url = 'http://localhost:8080/api/training/update/'+ training.id;
   
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    this.http.put(url,
      training).subscribe(
            data => {
                console.log("PUT Request is successful ", data);
            },
            error => {
                console.log("Error", error);
            }
        ); 
      
  }

  deleteTraining(training: Training): void{
    const url = 'http://localhost:8080/api/training/delete/' + training.id;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };        
    this.http.delete(url).subscribe(
            data => {
                console.log("DELETE Request is successful ", data);
            },
            error => {
                console.log("Error", error);
            }
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
