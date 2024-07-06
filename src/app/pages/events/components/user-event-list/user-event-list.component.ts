import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event } from '../../../../models/event.model';
import { UserService } from '../../../../services/user.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-event-list',
  templateUrl: './user-event-list.component.html',
  styleUrl: './user-event-list.component.scss',
})
export class UserEventListComponent implements OnInit, OnDestroy {
  events: Event[] = [];
  private subscriptions: Subscription[] = [];
  selectedEvent!: Event;

  constructor(private userService: UserService) {}

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

  handleEventSubmit(event: Event) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(event);
        const subscription = this.userService
          .editEvent(event._id, event)
          .subscribe({
            next: (updatedEvent: Event) => {
              const index = this.events.findIndex((e) => e._id === event._id);
              if (index !== -1) {
                this.events[index] = updatedEvent;
              }
            },
          });
        this.subscriptions.push(subscription);
      }
    });
  }

  handleDelete(eventId: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with the deletion process
        this.userService.deleteEvent(eventId).subscribe({
          next: () => {
            Swal.fire('Deleted!', 'Your event has been deleted.', 'success');
            // Optionally, refresh the list of events after deletion
            this.loadUserEvents();
          },
          error: (err) => {
            Swal.fire(
              'Failed to delete',
              'There was an error deleting the event.',
              'error'
            );
          },
        });
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
