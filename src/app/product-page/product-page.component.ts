import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, ProductCategory } from '../../data/product.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  @Input() product: Product;
  @Input() isSunProduct: boolean;

  @Output() goBackToTree = new EventEmitter<void>();

  showProduct = false;

  sunMoonURL: string;

  constructor() {}

  ngOnInit(): void {
    // Small delay before showing the product, to avoid display issues while rendering
    setTimeout(() => {
      this.showProduct = true;
    }, 100);

    // Initialize sun/moon link
    if (this.product.category === ProductCategory.LifeGarment) {
      this.sunMoonURL = 'https://door.metta-garment.com/the-life-garment/';
    } else {
      this.sunMoonURL = 'https://door.metta-garment.com/the-essence-garment/';
    }
  }

  onOverlayClicked(): void {
    this.goBackToTree.emit();
  }

  goToProductPage(): void {
    window.open(this.product.productPageLink, '_self');
  }

}
