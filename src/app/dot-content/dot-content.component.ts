import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dot-content',
  templateUrl: './dot-content.component.html',
  styleUrls: ['./dot-content.component.scss']
})
export class DotContentComponent implements OnInit {

  philosophyMenuExpanded = false;
  garmentMenuExpanded = false;

  constructor() {}

  ngOnInit(): void {}

}
