import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  constructor(private store: Store){}

}
