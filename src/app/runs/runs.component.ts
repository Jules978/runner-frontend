import { Component, OnInit } from '@angular/core';
import { RUNS} from '../mock-runs';

@Component({
  selector: 'app-runs',
  templateUrl: './runs.component.html',
  styleUrls: ['./runs.component.css']
})
export class RunsComponent implements OnInit {
  runs = RUNS;
  constructor() { }

  ngOnInit() {
  }

}
