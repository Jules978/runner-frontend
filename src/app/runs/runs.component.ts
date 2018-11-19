import { Component, OnInit } from '@angular/core';
import { Run } from '../run';
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

  giveClass(status: string): string{ 

    switch (status) {
      case "overdue": {
        return "list-group-item list-group-item-action";
      }
      case "finished": {
        return "list-group-item list-group-item-success";
      }
      case "planned": {
        return "list-group-item list-group-item-info";
      }
    }
  }

  giveClassAlt(status: string): string {
    if (status == "overdue"){
      return "list-group-item list-group-item-action";
    } else if (status == "finished") {
      return "list-group-item list-group-item-success";
    } else {return "list-group-item list-group-item-info";}
  }

  constructor(private runService: RunService) { }

  ngOnInit() {

    this.getRuns();
  }

}
