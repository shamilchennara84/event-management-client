import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventListComponent } from './components/event-list/event-list.component';


@NgModule({
  declarations: [SidebarComponent,DashboardComponent, EventListComponent],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
