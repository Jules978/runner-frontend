import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { RunsComponent } from './runs/runs.component';
import { RunDetailComponent } from './run-detail/run-detail.component';
import { UnfinishedRunsComponent } from './unfinished-runs/unfinished-runs.component';
import { CreateRunComponent } from './create-run/create-run.component';
import { CreateTrainingComponent } from './create-training/create-training.component';
import { AddNewComponent } from './add-new/add-new.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    TrainingDetailComponent,
    DashboardComponent,
    RunsComponent,
    RunDetailComponent,
    UnfinishedRunsComponent,
    CreateRunComponent,
    CreateTrainingComponent,
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
