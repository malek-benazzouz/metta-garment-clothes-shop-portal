import { Component, OnInit } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { pageOverlayAnimation } from '../animations/page-overlay.animation';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss'],
  animations: [pageOverlayAnimation]
})
export class NavbarMenuComponent implements OnInit {

  showPageOverlay = false;

  constructor() {}

  ngOnInit(): void {}

  // Open the menu on mouse enter
  onMenuEnter(dropdown: NgbDropdown, event: MouseEvent, dropdownId: string): void {
    dropdown.open();
    this.showPageOverlay = true;
  }

  // Close the menu on mouse leave
  onMenuLeave(dropdown: NgbDropdown, event: MouseEvent, dropdownId: string): void {
    // Do not close the menu if the mouse goes into the dropdown menu
    if ((event as any)?.relatedTarget?.parentElement?.id !== dropdownId) {
      dropdown.close();
      this.showPageOverlay = false;
    }
  }

}
