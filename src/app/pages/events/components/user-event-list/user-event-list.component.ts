import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event } from '../../../../models/event.model';
import { UserService } from '../../../../services/user.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditEventModalComponent } from '../edit-event-modal/edit-event-modal.component';

@Component({
  selector: 'app-user-event-list',
  templateUrl: './user-event-list.component.html',
  styleUrl: './user-event-list.component.scss',
})
export class UserEventListComponent implements OnInit, OnDestroy {
  events: Event[] = [];
  private subscriptions: Subscription[] = [];
  selectedEvent!: Event;

  constructor(
    private userService: UserService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.loadUserEvents();
  }

  loadUserEvents() {
    const subscription = this.userService
      .getUserEvents()
      .subscribe((events) => {
        this.events = events;
      });
    this.subscriptions.push(subscription);
  }

  addEvent(newEvent: any) {
    const subscription = this.userService.addUserEvent(newEvent).subscribe({
      next: (addedEvent: any) => {
        this.events.push(addedEvent);
      },
      error: (error) => {
        console.error('Error adding event:', error);
      },
    });
    this.subscriptions.push(subscription);
  }

  openEditModal(event: Event) {
    console.log(event);
    this.selectedEvent = event;
    const modalRef = this.modalService.open(EditEventModalComponent);
    modalRef.componentInstance.event = this.selectedEvent;
    modalRef.result
      .then((result) => {
        if (result === 'updated') {
        }
      })
      .catch((error) => {
        console.error('Modal dismissed with error:', error);
      });
  }

  updateEvent(updatedEvent: Event) {
    const index = this.events.findIndex(
      (event) => event._id === updatedEvent._id
    );
    if (index !== -1) {
      this.events[index] = updatedEvent;
    }
  }

  deleteEvent(event: Event) {
    this.events = this.events.filter((e) => e._id !== event._id);
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
