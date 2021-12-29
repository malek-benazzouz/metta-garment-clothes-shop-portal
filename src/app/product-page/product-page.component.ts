import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../data/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  @Input() product: Product;
  @Input() isSunProduct: boolean;

  @Output() backButtonClicked = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onBackButtonClicked(): void {
    this.backButtonClicked.emit();
  }

}
