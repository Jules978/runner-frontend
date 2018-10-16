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

  giveClass(overdue: string, finished: string): string{ 
    if(overdue == "no"){
      if(finished == "no"){
        return "list-group-item list-group-item-action"
      } else {
        return "list-group-item list-group-item-action list-group-item-success"
      }
      
    } else { 
      if (finished =="no") {
        return "list-group-item list-group-item-action list-group-item-warning"
      } 
      return "list-group-item list-group-item-action list-group-item-success"
    }
  }

  constructor(private runService: RunService) { }

  ngOnInit() {

    this.getRuns();
  }

}
