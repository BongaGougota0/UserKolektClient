import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {  } from '../../../store/auth/auth.actions';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm!: FormGroup;

  constructor(private store: Store, private fb: FormBuilder){
    this.registerForm = this.fb.group({
      username: [Validators.minLength(4), Validators.maxLength(20), Validators.required],
      email: [Validators.email],
      password: [Validators.required, Validators.min(8), Validators.maxLength(20)]
    })
  }

  onSubmit() {
    // this.store.dispatch();
  }

}
