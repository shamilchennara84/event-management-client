import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-password-validation',
  templateUrl: './password-validation.component.html',
  styleUrl: './password-validation.component.scss',
})
export class PasswordValidationComponent {
  @Input() passwordControl: AbstractControl | null = null;
  @Input() isSubmitted = false;
}
