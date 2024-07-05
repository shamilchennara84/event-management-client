import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { RegistrationComponent } from './components/registration/registration.component';
import { EmailValidationComponent } from './components/common/email-validation/email-validation.component';
import { PasswordValidationComponent } from './components/common/password-validation/password-validation.component';
import { UsernameValidationComponent } from './components/common/username-validation/username-validation.component';
import { RepeatPasswordValidationComponent } from './components/common/repeat-password-validation/repeat-password-validation.component';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    EmailValidationComponent,
    PasswordValidationComponent,
    UsernameValidationComponent,
    RepeatPasswordValidationComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [AuthService],
})
export class AuthModule {}
