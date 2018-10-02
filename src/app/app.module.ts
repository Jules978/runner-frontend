import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RunsComponent } from './runs/runs.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { RunDetailComponent } from './run-detail/run-detail.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RunsComponent,
    TrainingsComponent,
    RunDetailComponent,
    TrainingDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
