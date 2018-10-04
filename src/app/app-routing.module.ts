import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RunsComponent } from './runs/runs.component';
import { TrainingsComponent} from './trainings/trainings.component';

const routes: Routes = [
  {path: 'runs', component: RunsComponent},
  {path: 'trainings', component: TrainingsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
