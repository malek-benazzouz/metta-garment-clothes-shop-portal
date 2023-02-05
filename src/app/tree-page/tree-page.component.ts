import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../../data/product.model';
import { findProductById, getProductAvailMap } from '../../data/products.data';

@Component({
  selector: 'app-tree-page',
  templateUrl: './tree-page.component.html',
  styleUrls: ['./tree-page.component.scss']
})
export class TreePageComponent implements OnInit {

  @Output() openProduct = new EventEmitter<{ product: Product, isSunProduct: boolean }>();

  sunProduct: Product | undefined;
  moonProduct: Product | undefined;

  productAvailMap: { [productId: string]: boolean } = getProductAvailMap();

  constructor() {}

  ngOnInit(): void {}

  showSunProduct(productId: string, isClickEvent?: boolean): void {
    const product = findProductById(productId);
    this.sunProduct = product;
    this.moonProduct = undefined;
    if (product && isClickEvent) {
      this.openProduct.emit({ product, isSunProduct: true });
    }
  }

  showMoonProduct(productId: string, isClickEvent?: boolean): void {
    const product = findProductById(productId);
    this.sunProduct = undefined;
    this.moonProduct = product;
    if (product && isClickEvent) {
      this.openProduct.emit({ product, isSunProduct: false });
    }
  }

}
