import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event } from '../../../../models/event.model';
import { Subscription } from 'rxjs';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';

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


  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
