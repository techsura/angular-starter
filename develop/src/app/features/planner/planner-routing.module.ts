import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsFormComponent } from './events/events-form/events-form.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { PlannerComponent } from './planner.component';
import { SpeakersFormComponent } from './speakers/speakers-form/speakers-form.component';
import { SpeakersListComponent } from './speakers/speakers-list/speakers-list.component';

const routes: Routes = [
  { path: '', component: PlannerComponent, children: [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'speakers', component: SpeakersListComponent},
    { path: 'speakers-form', component: SpeakersFormComponent},
    { path: 'events', component: EventsListComponent},
    { path: 'events-form', component: EventsFormComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlannerRoutingModule { }
