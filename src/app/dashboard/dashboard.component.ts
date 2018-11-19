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

  giveClass(status: string): string{ 
    if(status != "overdue"){
      return "list-group-item list-group-item-action"
    } else { 
      return "list-group-item list-group-item-warning"
    }
  }


  constructor(private runService: RunService) { }

  ngOnInit() {

    this.getRuns();
  }

  
}
