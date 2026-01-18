import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { navigate } from '../utils/functions';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
})
export class AppHeader {
  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigateByUrl(path);
  }
}
