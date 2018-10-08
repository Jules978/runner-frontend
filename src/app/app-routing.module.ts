import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RunsComponent } from './runs/runs.component';
import { TrainingsComponent} from './trainings/trainings.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { CreateTrainingComponent } from './create-training/create-training.component';
import { CreateRunComponent } from './create-run/create-run.component';

const routes: Routes = [
  {path: 'runs', component: RunsComponent},
  {path: 'trainings', component: TrainingsComponent},
  {path: '', component: DashboardComponent},
  {path: 'addrun', component: CreateRunComponent},
  {path: 'addtraining', component: CreateTrainingComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
