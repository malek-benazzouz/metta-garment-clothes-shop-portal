import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  shouldShowPhilosophyGroup = false;
  shouldShowGarmentGroup = false;

  constructor() {}

  ngOnInit(): void {}

  showPhilosophyGroup(): void {
    this.shouldShowPhilosophyGroup = true;
  }

  hidePhilosophyGroup(): void {
    this.shouldShowPhilosophyGroup = false;
  }

}
