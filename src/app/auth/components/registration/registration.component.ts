import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { emailValidators, passwordValidators, userNameValidators } from '../../shared/validators';
import { passwordMatchValidator, validateByTrimming } from '../../helpers/validation';
import { AuthResponse } from '../../../models/auth.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit, OnDestroy {
  registerForm!: FormGroup;
  isSubmitted = false;
  private registerSubscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        name: ['', [validateByTrimming(userNameValidators)]],
        email: ['', [validateByTrimming(emailValidators)]],
        password: ['', [validateByTrimming(passwordValidators)]],
        confirmPassword: [''],
      },

      { validators: passwordMatchValidator }
    );
  }

  get f(): Record<string, AbstractControl> {
    return this.registerForm.controls;
  }

  register() {
    this.isSubmitted = true;
    if (this.registerForm.valid) {
      const registerObserver = {
        next: (value: AuthResponse) => {
          this.router.navigate(['/articles']);
        },
      };

      this.registerSubscription = this.authService
        .register(this.registerForm.value)
        .subscribe(registerObserver);
    }
  }

  ngOnDestroy() {
    if (this.registerSubscription) {
      this.registerSubscription.unsubscribe();
    }
  }
}
