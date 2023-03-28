import { Component, OnInit } from '@angular/core';
import { Product } from '../../data/product.model';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isDotExpanded: boolean;

  openProduct: Product | undefined;
  isOpenProductSunProduct: boolean;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.isDotExpanded = route.snapshot.data?.expandDot || false;
  }

  // Flag used to detect changes from mobil to desktop view
  isMobile: boolean;

  private isMobileViewport(): boolean {
    return window.innerWidth < 992;
  }

  ngOnInit(): void {
    this.isMobile = this.isMobileViewport();

    // If we resize the window (e.g. mobile landscape to portrait), we may switch from desktop to mobile, and don't want to display a previously opened product in this case
    fromEvent(window, 'resize').pipe(debounceTime(200)).subscribe(() => {
      // Reset the open product if we switch from mobile to desktop
      if (this.isMobile && !this.isMobileViewport()) {
        this.openProduct = undefined;
      }
      // Update isMobile flag
      this.isMobile = this.isMobileViewport();
    });

    // When navigating back while product is open, close it
    this.route.fragment.subscribe(routeFragment => {
      if (routeFragment === null) {
        this.openProduct = undefined;
      }
    })
  }

  onToggleDot(): void {
    this.isDotExpanded = !this.isDotExpanded;
  }

  onOpenProduct(productInfo: { product: Product, isSunProduct: boolean }): void {
    this.openProduct = productInfo.product;
    this.isOpenProductSunProduct = productInfo.isSunProduct;
    void this.router.navigate([], { fragment: 'showProduct' });
  }

  onBackToTree(): void {
    this.openProduct = undefined;
    void this.router.navigate([], { replaceUrl: true });
  }

}
