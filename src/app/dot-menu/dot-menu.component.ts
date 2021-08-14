import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dot-menu',
  templateUrl: './dot-menu.component.html',
  styleUrls: ['./dot-menu.component.scss']
})
export class DotMenuComponent implements OnInit {

  philosophyMenuExpanded = false;
  garmentMenuExpanded = false;

  constructor() {}

  ngOnInit(): void {}

}
