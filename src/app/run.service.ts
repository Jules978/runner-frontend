import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Run } from './run';
import { RUNS} from './mock-runs';
import { Training } from './training';
import { TRAININGS} from './mock-trainings';

@Injectable({
  providedIn: 'root'
})
export class RunService {

  getRuns(): Observable<Run[]> {
    return of (RUNS);
  }

  get Trainings(): Observable<Training[]> {
    return of (TRAININGS);
  }

  constructor() { }
}
