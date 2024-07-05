import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-repeat-password-validation',
  templateUrl: './repeat-password-validation.component.html',
  styleUrl: './repeat-password-validation.component.scss',
})
export class RepeatPasswordValidationComponent {
  @Input() repeatPassControl: AbstractControl | null = null;
  @Input() isSubmitted = false;
}
