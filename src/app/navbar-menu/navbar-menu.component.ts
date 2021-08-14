import { Component, OnInit } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  // Open the menu on mouse enter
  onMenuEnter(dropdown: NgbDropdown, event: MouseEvent, dropdownId: string): void {
    dropdown.open();
  }

  // Close the menu on mouse leave
  onMenuLeave(dropdown: NgbDropdown, event: MouseEvent, dropdownId: string): void {
    // Do not close the menu if the mouse goes into the dropdown menu
    if ((event as any)?.relatedTarget?.parentElement?.id !== dropdownId) {
      dropdown.close();
    }
  }

}
