import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() hasDot: boolean = true;
  @Input() hasNavbarMenu: boolean = true;
  @Input() hasLinkToCart: boolean = true;
  @Input() isDotExpanded: boolean = false;

  @Output() toggleDot = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onToggleDot(): void {
    this.toggleDot.emit();
  }

}
