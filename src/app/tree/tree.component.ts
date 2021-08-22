import { Component, OnInit } from '@angular/core';
import { Product } from '../../data/product.model';
import { findProductById } from '../../data/products.data';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  sunProduct: Product | undefined;
  moonProduct: Product | undefined;

  constructor() {}

  ngOnInit(): void {}

  showSunProduct(productId: string): void {
    this.sunProduct = findProductById(productId);
    this.moonProduct = undefined;
  }

  showMoonProduct(productId: string): void {
    this.sunProduct = undefined;
    this.moonProduct = findProductById(productId);
  }

}
