import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  _FB: FormBuilder = inject(FormBuilder)

  // =========================    signUp Form    ==============================
  signUpForm: FormGroup = this._FB.group({
    FirstName: [null, Validators.required],
    LastName: [null, Validators.required],
    Email: [null, [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    Password: [null, Validators.required],
    ConfirmPassword: [null]
  }, { validators: this.confirmPassword })


  // =========================    Custom Validations   ============================
  confirmPassword(signUpFormg: FormGroup) {
    if (signUpFormg.get('Password')?.value === signUpFormg.get('ConfirmPassword')?.value) {
      return null
    }
    else {
      // if password != repassword >>> set error "mismatch"
      return { mismatch: true }
    }
  }


  // ==============================    getter    ==============================
  get FirstName() {
    return this.signUpForm.get('FirstName')
  }
  get LastName() {
    return this.signUpForm.get('LastName')
  }
  get Email() {
    return this.signUpForm.get('Email')
  }
  get Password() {
    return this.signUpForm.get('Password')
  }
  get ConfirmPassword() {
    return this.signUpForm.get('ConfirmPassword')
  }


  // ==============================     submit register form    ==============================
  setRegister() {
    // check if the form inputs are valid ..

    if (this.signUpForm.valid) {
      // send data to API
      console.log(this.signUpForm);
    }


    else {
      // show error msg for each invalid input
      this.signUpForm.markAllAsTouched()
    }
  }





}
