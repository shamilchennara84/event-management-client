import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-email-validation',
  templateUrl: './email-validation.component.html',
  styleUrl: './email-validation.component.scss',
})
export class EmailValidationComponent {
  @Input() emailControl: AbstractControl | null = null;
  @Input() isSubmitted = false;
}
