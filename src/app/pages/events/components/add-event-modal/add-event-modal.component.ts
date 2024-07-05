import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-add-event-modal',
  templateUrl: './add-event-modal.component.html',
  styleUrl: './add-event-modal.component.scss',
})
export class AddEventModalComponent {
  @Output() eventAdded = new EventEmitter<any>();
  addEventForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addEventForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: [''],
      location: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.addEventForm.valid) {
      this.eventAdded.emit(this.addEventForm.value);
      this.addEventForm.reset();
      const modal = document.getElementById('addEventModal');
      if (modal) {
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        if (bootstrapModal) {
          bootstrapModal.hide();
        }
      }
    }
  }
}
