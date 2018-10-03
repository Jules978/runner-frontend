import { Component, OnInit } from '@angular/core';
import { Training } from '../Training';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  training: Training = {
    id: 1,
    name: 'sub 45min 10k',
    description: 'faster 10k, with some interval training',
    type: 'speed improvement'
  }

  constructor() { }

  ngOnInit() {
  }

}
