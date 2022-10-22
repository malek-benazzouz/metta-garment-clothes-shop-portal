import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal-info',
  templateUrl: './legal-info.component.html',
  styleUrls: ['./legal-info.component.scss']
})
export class LegalInfoComponent implements OnInit {

  @Input() showPropertyText = true;
  @Input() showNewsletterText = true;

  constructor() {}

  ngOnInit(): void {}

}
