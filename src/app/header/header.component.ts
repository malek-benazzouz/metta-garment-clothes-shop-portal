import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() hasDot: boolean = true;
  @Input() hasNavbarMenu: boolean = true;

  @Output() toggleDot = new EventEmitter<boolean>(); // True if expanded, false if collapsed

  constructor() {}

  ngOnInit(): void {}

  onToggleDot(isExpanded: boolean): void {
    this.toggleDot.emit(isExpanded);
  }

}
