import { Component, OnInit } from '@angular/core';
import { Product } from '../../data/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isDotExpanded = false; // TODO add animation when expanding/collapsing dot content

  constructor() {}

  ngOnInit(): void {}

  onToggleDot(isExpanded: boolean): void {
    this.isDotExpanded = isExpanded;
  }

  onOpenProduct(productInfo: { product: Product, isSunProduct: boolean }): void {
    console.warn('Product opened: ', productInfo);
  }

}
