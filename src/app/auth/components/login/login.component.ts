import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { emailValidators, passwordValidators } from '../../shared/validators';
import { validateByTrimming } from '../../helpers/validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  MIN_PASSWORD_LENGTH = 6;
  isSubmitted = false;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [validateByTrimming(emailValidators)]],
      password: ['', [validateByTrimming(passwordValidators)]],
    });
  }

  get f(): Record<string, AbstractControl> {
    return this.loginForm.controls;
  }

  login(): void {
    console.log("login called");
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      const loginSub = this.authService
        .login(this.loginForm.value)
        .subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      this.subscriptions.add(loginSub);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
