import { Component, OnInit } from '@angular/core';
import { Training } from '../Training';
import { TRAININGS} from '../mock-trainings';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  trainings = TRAININGS;

  constructor() { }

  ngOnInit() {
  }

}
