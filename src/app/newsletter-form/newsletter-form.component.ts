import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss']
})
export class NewsletterFormComponent implements OnInit {

  // TODO on form submit send the email address to a new firebase DB

  emailControl = new FormControl('', [Validators.required, Validators.email]);

  constructor() {}

  ngOnInit(): void {}

}
