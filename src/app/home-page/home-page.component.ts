import { Component, OnInit } from '@angular/core';
import { Product } from '../../data/product.model';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isDotExpanded: boolean;

  openProduct: Product | undefined;
  isOpenProductSunProduct: boolean;

  constructor(private route: ActivatedRoute) {
    this.isDotExpanded = route.snapshot.data?.expandDot || false;
  }

  ngOnInit(): void {
    // If we resize the window (e.g. mobile landscape to portrait), we may switch from desktop to mobile, so we want to reset the open product
    fromEvent(window, 'resize').pipe(debounceTime(200)).subscribe(() => {
      this.openProduct = undefined;
    });
  }

  onToggleDot(): void {
    this.isDotExpanded = !this.isDotExpanded;
  }

  onOpenProduct(productInfo: { product: Product, isSunProduct: boolean }): void {
    this.openProduct = productInfo.product;
    this.isOpenProductSunProduct = productInfo.isSunProduct;
  }

  onBackToHome(): void {
    this.openProduct = undefined;
  }

}
