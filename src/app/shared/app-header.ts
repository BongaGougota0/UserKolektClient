import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { navigate } from '../utils/functions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuthenticated } from '../store/auth/auth.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
})
export class AppHeader {
  isAuthenticated$: Observable<boolean>;
  isAuthenticated!: boolean;
  
  constructor(private router: Router, private store: Store) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });
  }

  navigate(path: string) {
    this.router.navigateByUrl(path);
  }

  ngOninit() {
  }

}
