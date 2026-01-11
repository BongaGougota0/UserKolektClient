import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { SessionService } from '../services/session.service';
import { Product, UserAction } from '../models/product.model';
import { ProductDetailModalComponent } from './product-detail-modal';
import { AppHeader } from "../shared/app-header";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailModalComponent, AppHeader],
  template: `
  <app-header></app-header>
      <main class="container">
        <section class="product-grid" id="productGrid">
    
          @for(product of products(); track product?.productId) {

            <div class="product-card" data-id="1">
                <div class="product-image">
                    <img [src]="product.imageUrl" alt="{{product.name}}">
                </div>
                <div class="product-info">
                    <h3 class="product-name">{{product.name}}</h3>
                    <p class="product-desc">{{product.description}}</p>
                    <div class="product-meta">
                        <span class="price">R {{product.price}}</span>
                        <div class="stats">
                            <span class="view-count"><i class="far fa-eye"></i> <span class="count">{{product.viewCount}}</span></span>
                            <span class="fav-count"><i class="far fa-heart"></i> <span class="count">{{product.favouriteCount}}</span></span>
                        </div>
                    </div>
                    <div class="action-buttons">
                        <button class="btn btn-action view-btn" (click)="onProductClick(product, 'VIEW')" title="View Product"><i class="fas fa-eye"></i> View</button>
                        <button class="btn btn-action fav-btn" (click)="onProductClick(product, 'FAVOURITE')" title="Add to Favorites"><i class="fas fa-heart"></i> Favorite</button>
                    </div>
                    <button class="btn btn-primary btn-full">Add to Cart</button>
                </div>
            </div>
            
          }

        </section>
      </main>

    <app-product-detail-modal #detailModal></app-product-detail-modal>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {
  products = signal<Product[]>([]);
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
      next: (data) => {
        this.products.set(data);
      },
      error: (err) => console.error('Error fetching products', err)
    });
  }

  onProductClick(product: Product, type: string): void {
    // Open modal via ViewChild
    const _throw = type == 'VIEW' ? this.detailModal.open(product) : 'FAVOURITE'
    // Log VIEW action
    const action: UserAction = {
      productId: product.productId,
      userId: this.sessionService.getUserId(),
      actionType: type == 'VIEW' ? 'VIEW' : 'FAVOURITE'
    };

    this.productService.logUserAction(action).subscribe({
      next: () => console.log('View action logged'),
      error: (err) => console.error('Error logging action', err)
    });
  }
  
}
