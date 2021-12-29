import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../../data/product.model';
import { findProductById } from '../../data/products.data';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Output() openProduct = new EventEmitter<{ product: Product, isSunProduct: boolean }>();

  sunProduct: Product | undefined;
  moonProduct: Product | undefined;

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
