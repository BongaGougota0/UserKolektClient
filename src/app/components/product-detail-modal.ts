import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-detail-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="isVisible" class="modal-backdrop">
      <div class="modal-content">
        <h2 *ngIf="product">{{ product.name }}</h2>
        <img *ngIf="product" [src]="product.imageUrl" [alt]="product.name">
        <p *ngIf="product">{{ product.description }}</p>
        <p *ngIf="product">Price: {{ product.price }}</p>
        <button (click)="close()">Close</button>
      </div>
    </div>
  `,
  styles: []
})
export class ProductDetailModalComponent {
  @Input() product: Product | null = null;
  isVisible = false;

  open(product: Product) {
    this.product = product;
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
    this.product = null;
  }
}
