import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NewsletterSubscriptionService } from './newsletter.service';

@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss']
})
export class NewsletterFormComponent implements OnInit {

  emailControl = new FormControl('', [Validators.required, Validators.email]);

  feedbackMessages: { message: string, isSuccess: boolean }[] = [];

  constructor(private newsletterSubscriptionService: NewsletterSubscriptionService) {}

  ngOnInit(): void {}

  submitForm(): void {
    if (this.emailControl.dirty && this.emailControl.valid) {
      this.newsletterSubscriptionService.addNewsletterSubscription({
        email: this.emailControl.value,
        subscriptionDate: { timestamp: Date.now(), formatted: new Date().toString() }
      }).then(
        () => { // Success
          this.feedbackMessages.push({
            message: `Thank you for subscribing. We will send our latest updates to ${this.emailControl.value}.`,
            isSuccess: true
          });
        },
        (error) => { // Error
          console.error('An error occurred while trying to add a newsletter subscription: ', error);
          this.feedbackMessages.push({
            message: 'An error occurred while trying to submit you email. Please try again.',
            isSuccess: false
          })
        }
      );
    }
  }

}
