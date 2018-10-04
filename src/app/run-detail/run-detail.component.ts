import { Component, OnInit, Input } from '@angular/core';
import { Run } from '../run';
import { Training } from '../training';

@Component({
  selector: 'app-run-detail',
  templateUrl: './run-detail.component.html',
  styleUrls: ['./run-detail.component.css']
})
export class RunDetailComponent implements OnInit {
  @Input() run: Run;

  updateRun(run: Run): void {
    console.log(run);
  }
  constructor() { }

  ngOnInit() {
  }

}
