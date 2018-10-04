import { Component, OnInit } from '@angular/core';
import { Training } from '../Training';
import { TRAININGS} from '../mock-trainings';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})

export class TrainingsComponent implements OnInit {

  trainings: Training[];
  selectedTraining: Training;

  onSelect(training: Training): void {
    this.selectedTraining = training;
  }

  getTrainings(): void {
    this.trainingService.getTrainings().subscribe(trainings => this.trainings = trainings);
  }

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.getTrainings();
  }

}
