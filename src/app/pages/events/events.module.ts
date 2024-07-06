import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { UserEventListComponent } from './components/user-event-list/user-event-list.component';
import { EventListItemComponent } from './components/event-list-item/event-list-item.component';
import { AddEventModalComponent } from './components/add-event-modal/add-event-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserEventListItemComponent } from './components/user-event-list-item/user-event-list-item.component';

@NgModule({
  declarations: [
    SidebarComponent,
    DashboardComponent,
    EventListComponent,
    UserEventListComponent,
    EventListItemComponent,
    AddEventModalComponent,
    UserEventListItemComponent,
  ],
  imports: [CommonModule, EventsRoutingModule, ReactiveFormsModule, NgbModule],
})
export class EventsModule {}
