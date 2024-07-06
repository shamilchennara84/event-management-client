import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrl: './event-list-item.component.scss',
})
export class EventListItemComponent {
  @Input() eventId!: string
  @Input() eventDate!: Date;
  @Input() eventTitle!: string;
  @Input() eventDescription!: string;
  @Input() eventLocation!: string;
  @Input() eventTime!: string;


  @Output() rsvpEvent = new EventEmitter<string>();

  onRSVP() {
    this.rsvpEvent.emit(this.eventId);
  }
}
