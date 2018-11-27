import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';   
import { Run } from '../run';
import { Training } from '../training';
import { TrainingService } from '../training.service';
import { RunService } from '../run.service';
import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-run-detail',
  templateUrl: './run-detail.component.html',
  styleUrls: ['./run-detail.component.css']
})
export class RunDetailComponent implements OnInit {
  @Input() run: Run;
  selectedTraining: Training;
  trainings: Training[];
  showUpdateRun: boolean = false;
  
  getTrainings(): void {
    this.trainingService.getTrainings().subscribe(trainings => this.trainings = trainings);
  }
 

  unfinishedCheck(status: string): boolean{
    return status != "finished";
  }

  updateRun(run: Run): void {
    this.runService.updateRun(run);
  }

  finishRun(run: Run): void {
    this.runService.finishRun(run);
    run.status="finished";
  }

  deleteRun(run: Run): void {
    this.runService.deleteRun(run);
    this.run = null;
  }

  constructor(private trainingService: TrainingService, private runService: RunService) { }

  ngOnInit() {
    this.getTrainings();
  }

}
