import { Component, OnInit, Input } from '@angular/core';
import { Training} from '../training';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {
  @Input() training: Training;
  trainingdetails: any;

  deleteTraining(training: Training): void {

    this.trainingService.deleteTraining(training);
    this.training = null;
    
  }

  updateTraining(training: Training): void {
    this.trainingService.updateTraining(training);
  }

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    
  }
  

}
