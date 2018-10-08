import { Component, OnInit } from '@angular/core';

import { RunService } from '../run.service';
import { Run } from '../run';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  runs: Run[];
  selectedRun: Run;

  onSelect(run: Run): void {
    this.selectedRun = run;
  }
  
  getRuns(): void {
    this.runService.getUnfinishedRuns().subscribe(runs => this.runs = runs);

  }

  constructor(private runService: RunService) { }

  ngOnInit() {

    this.getRuns();
  }

  
}
