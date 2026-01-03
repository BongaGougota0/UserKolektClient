import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { SessionService } from '../services/session.service';
import { Product, UserAction } from '../models/product.model';
import { ProductDetailModalComponent } from './product-detail-modal';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailModalComponent],
  template: `
    <div class="product-grid">
      <div *ngFor="let product of products" class="product-card" (click)="onProductClick(product)">
        <img [src]="product.imageUrl" [alt]="product.name">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
        <div class="stats">
          <span>Views: {{ product.viewCount }}</span>
          <span>Favorites: {{ product.favouriteCount }}</span>
        </div>
      </div>
    </div>
    <app-product-detail-modal #detailModal></app-product-detail-modal>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  @ViewChild('detailModal') detailModal!: ProductDetailModalComponent;

  constructor(
    private productService: ProductService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Error fetching products', err)
    });
  }

  onProductClick(product: Product): void {
    // Open modal via ViewChild
    this.detailModal.open(product);

    // Log VIEW action
    const action: UserAction = {
      productId: product.id.toString(),
      userId: this.sessionService.getUserId(),
      actionType: 'VIEW'
    };

    this.productService.logUserAction(action).subscribe({
      next: () => console.log('View action logged'),
      error: (err) => console.error('Error logging action', err)
    });
  }
}
