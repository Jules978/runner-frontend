import { Component, OnInit } from '@angular/core';
import { Run } from '../run';
import { RUNS} from '../mock-runs';
import { RunService } from '../run.service';

@Component({
  selector: 'app-runs',
  templateUrl: './runs.component.html',
  styleUrls: ['./runs.component.css']
})
export class RunsComponent implements OnInit {
  runs: Run[];
  selectedRun: Run;

  onSelect(run: Run): void {
    this.selectedRun = run;
  }

  getRuns(): void {
    this.runService.getRuns().subscribe(runs => this.runs = runs);

  }

  constructor(private runService: RunService) { }

  ngOnInit() {

    this.getRuns();
  }

}
