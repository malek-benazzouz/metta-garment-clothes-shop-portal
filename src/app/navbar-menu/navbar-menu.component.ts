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

  onMenuEnter(dropdown: NgbDropdown, event: MouseEvent, parentId: string): void {
    dropdown.open();
  }

  onMenuLeave(dropdown: NgbDropdown, event: MouseEvent, parentId: string): void {
    if ((event as any)?.relatedTarget?.parentElement?.id !== parentId) {
      dropdown.close();
    }
  }

}
