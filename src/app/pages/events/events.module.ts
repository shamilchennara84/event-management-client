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
import { EditEventModalComponent } from './components/edit-event-modal/edit-event-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    SidebarComponent,
    DashboardComponent,
    EventListComponent,
    UserEventListComponent,
    EventListItemComponent,
    AddEventModalComponent,
    EditEventModalComponent,


  ],
  imports: [CommonModule, EventsRoutingModule, ReactiveFormsModule,NgbModule],
})
export class EventsModule {}
