import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { loginUser } from '../../../store/auth/auth.actions'; 

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm!: FormGroup;
  
  constructor(private store: Store, private fb: FormBuilder){}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [Validators.email],
      password: [Validators.minLength(6), Validators.maxLength(20)]
    })
  }

  onSubmit() {
    if(!this.loginForm.valid) return;
    this.store.dispatch(loginUser(this.loginForm.value));
  }
}
