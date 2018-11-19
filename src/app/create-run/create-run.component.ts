import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';   

import { Run } from '../run';
import { Training } from '../training';
import { TrainingService } from '../training.service';
import { RunService } from '../run.service';

@Component({
  selector: 'app-create-run',
  templateUrl: './create-run.component.html',
  styleUrls: ['./create-run.component.css']
})
export class CreateRunComponent implements OnInit {
  trainings: Training[];
    
  test(): void {
    this.getTrainings();
    console.log("hello");
  }
  onSubmit(form:NgForm ) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    this.http.post("http://localhost:8080/api/run/add",
      {
        "date": form.value.date,
        "distance": form.value.distance,
        "title": form.value.title,
        "time": null,
        "score": null,
        "avspeed": null,
        "status": "planned",
        "comment": form.value.comment,
        "training": {
          "id": form.value.training            
        }
      }).subscribe(
            data => {
                console.log("POST Request is successful ", data);
            },
            error => {
                console.log("Error", error);
            }
        );    
  }
  getTrainings(): void {
    this.trainingService.getTrainings().subscribe(trainings => this.trainings = trainings);
  }
 
  constructor(private trainingService: TrainingService, private runService: RunService, private http: HttpClient) { }

  ngOnInit() {
    this.getTrainings();
    
    
  }

}
