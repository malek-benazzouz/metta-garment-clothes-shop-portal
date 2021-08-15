import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleDot = new EventEmitter<boolean>(); // True if expanded, false if collapsed

  constructor() {}

  ngOnInit(): void {}

  onToggleDot(isExpanded: boolean): void {
    this.toggleDot.emit(isExpanded);
  }

}
