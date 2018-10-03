import { Component, OnInit } from '@angular/core';
import { Run } from '../run';
import { RUNS} from '../mock-runs';

@Component({
  selector: 'app-runs',
  templateUrl: './runs.component.html',
  styleUrls: ['./runs.component.css']
})
export class RunsComponent implements OnInit {
  runs = RUNS;
  selectedRun: Run;
onSelect(run: Run): void {
  this.selectedRun = run;
}
  constructor() { }

  ngOnInit() {
  }

}
