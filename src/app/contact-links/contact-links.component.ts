import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-links',
  templateUrl: './contact-links.component.html',
  styleUrls: ['./contact-links.component.scss']
})
export class ContactLinksComponent implements OnInit {

  @Input() showSocialNetworkLinks = true;

  constructor() {}

  ngOnInit(): void {}

}
