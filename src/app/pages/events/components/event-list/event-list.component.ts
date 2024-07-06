import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event } from '../../../../models/event.model';
import { Subscription } from 'rxjs';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
})
export class EventListComponent implements OnInit, OnDestroy {
  events: Event[] = [];
  private subscriptions: Subscription[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadEvents();
  }
  loadEvents(): void {
    const subscription = this.userService.getAllEvents().subscribe((events) => {
      this.events = events;
    });
    this.subscriptions.push(subscription);
  }

  handleRsvp(eventId: string): void {
    this.userService.rsvpToEvent(eventId).subscribe({
      next: () => {
        console.log(`RSVP for event ${eventId} sent.`);
        Swal.fire(
          'Success!',
          'Your RSVP has been successfully submitted.',
          'success'
        );
      },
      error: (error) => {
        console.error('Error sending RSVP:', error);
        Swal.fire(
          'Error!',
          'There was an error submitting your RSVP.',
          'error'
        );
      },
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
