import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-detail-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="isVisible" class="modal-backdrop">
      
      <div class="modal-preview__overlay modal-preview--active" id="productModal">
          <div class="modal-preview__container">
              <button (click)="close()" class="modal-preview__close-btn" id="closeModal">&times;</button>
              <div class="modal-preview__content">
                  <div class="modal-preview__image-section">
                      <img [src]="product?.imageUrl" alt="Product Image" class="modal-preview__image" id="modalImage">
                  </div>
                  <div class="modal-preview__details-section">
                      <h2 class="modal-preview__title" id="modalTitle">{{product?.name}}</h2>
                      <div class="modal-preview__price" id="modalPrice">R {{product?.price}}</div>
                      <p class="modal-preview__description" id="modalDescription">{{product?.description}}</p>
                      
                      <div class="modal-preview__stats">
                          <div class="modal-preview__stat-item">
                              <i class="far fa-eye modal-preview__stat-icon"></i>
                              <span id="modalViews">{{product?.viewCount}}</span> Views
                          </div>
                          <div class="modal-preview__stat-item">
                              <i class="far fa-heart modal-preview__stat-icon"></i>
                              <span id="modalFavs">{{product?.favouriteCount}}</span> Favorites
                          </div>
                      </div>

                      <div class="modal-preview__actions">
                          <button class="modal-preview__btn modal-preview__btn--primary">Add to Cart</button>
                          <button class="modal-preview__btn modal-preview__btn--outline">Wishlist</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    </div>
  `,
  styleUrl: './product-detail-modal.css'
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
