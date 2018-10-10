import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';   

import { Run } from '../run';
import { Training } from '../training';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.css']
})
export class CreateTrainingComponent implements OnInit {
  onSubmit(form:NgForm ) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    this.http.post("http://localhost:8080/api/training/add",
      {
        "name": form.value.name,
        "description": form.value.description,
        "type": form.value.type
      }).subscribe(
            data => {
                console.log("POST Request is successful ", data);
            },
            error => {
                console.log("Error", error);
            }
        );    
  }
  constructor(private trainingService: TrainingService, private http: HttpClient) { }

  ngOnInit() {
  }

}
