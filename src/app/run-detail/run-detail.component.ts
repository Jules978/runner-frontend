import { Component, OnInit, Input } from '@angular/core';
import { Run } from '../run';
import { Training } from '../training';
import { TrainingService } from '../training.service';
import { RunService } from '../run.service';

@Component({
  selector: 'app-run-detail',
  templateUrl: './run-detail.component.html',
  styleUrls: ['./run-detail.component.css']
})
export class RunDetailComponent implements OnInit {
  @Input() run: Run;
  editRun: Run;
  selectedTraining: Training;
  trainings: Training[];
  showUpdateRun: boolean = false;
  editButton: string = "edit run";

  getTrainings(): void {
    this.trainingService.getTrainings().subscribe(trainings => this.trainings = trainings);
  }
  showHideEdit(): void {    
      this.setEditRun(this.run);

  }

  unfinishedCheck(finished: string): boolean{
    if(finished == "no"){return true} else { return false}
  }
  setEditRun(run: Run){
    this.editRun = Object.assign(new Run(), run);
  }

  updateRun(editedRun: Run): void {
    console.log(editedRun);
    this.run = Object.assign(new Run(), this.editRun);
  
  }
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.getTrainings();
  }

}
