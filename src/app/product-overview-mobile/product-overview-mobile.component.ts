import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../data/product.model';

@Component({
  selector: 'app-product-overview-mobile',
  templateUrl: './product-overview-mobile.component.html',
  styleUrls: ['./product-overview-mobile.component.scss']
})
export class ProductOverviewMobileComponent implements OnInit {

  @Input() product: Product;
  @Input() isSunProduct: boolean;

  isOverviewDisplayed = true;

  constructor() {}

  ngOnInit(): void {}

}
