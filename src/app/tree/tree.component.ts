import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  isSunProductDisplayed = false;
  isMoonProductDisplayed = false;

  constructor() {}

  ngOnInit(): void {}

  showSunProduct(productId: string): void {
    this.isSunProductDisplayed = true;
    this.isMoonProductDisplayed = false;
  }

  showMoonProduct(productId: string): void {
    this.isSunProductDisplayed = false;
    this.isMoonProductDisplayed = true;
  }

}
