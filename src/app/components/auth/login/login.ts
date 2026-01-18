import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  constructor(private store: Store){}

}
