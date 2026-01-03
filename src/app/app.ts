import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent],
  template: `
    <header>
      <h1>UserKolekt Client</h1>
    </header>
    <main>
      <app-product-list></app-product-list>
    </main>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'UserKolektClient';
}
