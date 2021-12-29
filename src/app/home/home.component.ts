import { Component, OnInit } from '@angular/core';
import { Product } from '../../data/product.model';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isDotExpanded = false;

  openProduct: Product | undefined;
  isOpenProductSunProduct: boolean;

  constructor() {}

  ngOnInit(): void {
    // If we resize the window (e.g. mobile landscape to portrait), we may switch from desktop to mobile, so we want to reset the open product
    fromEvent(window, 'resize').pipe(debounceTime(200)).subscribe(() => {
      this.openProduct = undefined;
    });
  }

  onToggleDot(isExpanded: boolean): void {
    this.isDotExpanded = isExpanded;
  }

  onOpenProduct(productInfo: { product: Product, isSunProduct: boolean }): void {
    this.openProduct = productInfo.product;
    this.isOpenProductSunProduct = productInfo.isSunProduct;
  }

  onBackToHome(): void {
    this.openProduct = undefined;
  }

}
