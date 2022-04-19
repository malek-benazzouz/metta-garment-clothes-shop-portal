import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NewsletterSubscriptionService } from '../services/newsletter.service';

@Component({
  selector: 'app-newsletter-form-coming-soon',
  templateUrl: './newsletter-form-coming-soon.component.html',
  styleUrls: ['./newsletter-form-coming-soon.component.scss']
})
export class NewsletterFormComingSoonComponent implements OnInit {

  @Output() submitSuccess = new EventEmitter<void>();

  emailControl = new FormControl('', [Validators.email]);

  feedback: { message: string, isSuccess: boolean };

  constructor(private newsletterSubscriptionService: NewsletterSubscriptionService) {}

  ngOnInit(): void {}

  submitForm(): void {
    // If email address is not empty and valid
    if (this.emailControl.value && this.emailControl.valid) {
      this.newsletterSubscriptionService.addNewsletterSubscription({
        email: this.emailControl.value,
        subscriptionDate: { timestamp: Date.now(), formatted: new Date().toUTCString() }
      }).then(
      // Promise.resolve().then( // TODO temp while testing leaf animation
        () => { // Success
          this.emailControl.reset();
          this.submitSuccess.emit();
        },
        (error) => { // Error
          console.error('An error occurred while trying to add a newsletter subscription: ', error);
          this.feedback = {
            message: 'An error occurred while trying to submit you email. Please try again.',
            isSuccess: false
          };
        }
      );
    }
    // If we are trying to submit, but email address is empty
    else if (!this.emailControl.value) {
      this.emailControl.setErrors({ emailRequired: true })
    }
  }

}
