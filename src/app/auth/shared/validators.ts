import { Validators } from '@angular/forms';
import {
  emailRegex,
  nameRegex,
  passwordMinLength,
  passwordRegex,
  userNameMaxLength,
  userNameMinLength,
} from './constants';

export const userNameValidators = [
  Validators.required,
  Validators.minLength(userNameMinLength),
  Validators.maxLength(userNameMaxLength),
  Validators.pattern(nameRegex),
];

export const emailValidators = [
  Validators.required,
  Validators.pattern(emailRegex),
];

export const passwordValidators = [
  Validators.required,
  Validators.minLength(passwordMinLength),
  Validators.pattern(passwordRegex),
];
