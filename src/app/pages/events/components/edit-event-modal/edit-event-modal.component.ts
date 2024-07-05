import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Event } from '../../../../models/event.model';

@Component({
  selector: 'app-edit-event-modal',
  templateUrl: './edit-event-modal.component.html',
  styleUrl: './edit-event-modal.component.scss',
})
export class EditEventModalComponent {
  @Input() event!: Event;
  @Output() eventUpdated = new EventEmitter<Event>();
  @Output() eventDeleted = new EventEmitter<Event>();

  eventForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.eventForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      date: ['', Validators.required],
      time: [''],
      location: [''],
    });
  }

  ngOnInit() {
    console.log(this.event);
    if (this.event) {
      this.eventForm.patchValue({
        title: this.event.title,
        description: this.event.description,
        date: this.event.date,
        time: this.event.time,
        location: this.event.location,
      });
    }
  }

  saveEvent() {
    if (this.eventForm.valid) {
      const updatedEvent = {
        ...this.event,
        ...this.eventForm.value,
      };
      this.eventUpdated.emit(updatedEvent);
      this.activeModal.close('updated');
    }
  }

  deleteEvent() {
    this.eventDeleted.emit(this.event);
    this.activeModal.close('deleted');
  }
  closeModal() {
    this.activeModal.dismiss('closed');
  }
}
