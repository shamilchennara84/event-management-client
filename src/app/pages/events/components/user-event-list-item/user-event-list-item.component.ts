import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-user-event-list-item',
  templateUrl: './user-event-list-item.component.html',
  styleUrl: './user-event-list-item.component.scss',
})
export class UserEventListItemComponent {
  @Input() eventId!: string;
  @Input() eventDate!: Date;
  @Input() eventTitle!: string;
  @Input() eventDescription!: string;
  @Input() eventLocation!: string;
  @Input() eventTime!: string;

  @Output() submitEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<string>();

  editEventForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editEventForm = this.fb.group({
      title: [this.eventTitle, Validators.required],
      date: [this.eventDate, Validators.required],
      description: [this.eventDescription || '', Validators.required],
      location: [this.eventLocation, Validators.required],
      time: [this.eventTime, Validators.required],
    });
  }

  onEditSubmit() {
    if (this.editEventForm.valid) {
      console.log(this.editEventForm.value);
      const eventData = this.editEventForm.value;
      console.log(eventData);

      this.submitEvent.emit({
        _id: this.eventId,
        title: this.editEventForm.get('title')?.value,
        description: this.editEventForm.get('description')?.value,
        date: this.editEventForm.get('date')?.value,
        location: this.editEventForm.get('location')?.value,
        time: this.editEventForm.get('time')?.value,
      });

      const modal = document.getElementById('editEventModal');
      if (modal) {
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        if (bootstrapModal) {
          bootstrapModal.hide();
        }
      }
    }
  }

  onDelete(): void {
    this.deleteEvent.emit(this.eventId);
  }
}
