import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../data/product.model';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {

  @Input() product: Product;
  @Input() isSunProduct: boolean;

  constructor() {}

  ngOnInit(): void {}

}
