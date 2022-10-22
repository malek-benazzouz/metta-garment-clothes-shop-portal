import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal-links',
  templateUrl: './legal-links.component.html',
  styleUrls: ['./legal-links.component.scss']
})
export class LegalLinksComponent implements OnInit {

  @Input() mobileVariant = false;

  constructor() {}

  ngOnInit(): void {}

}
