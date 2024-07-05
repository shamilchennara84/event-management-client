import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-username-validation',
  templateUrl: './username-validation.component.html',
  styleUrl: './username-validation.component.scss',
})
export class UsernameValidationComponent {
  @Input() usernameControl: AbstractControl | null = null;
  @Input() isSubmitted: boolean = false;
}
