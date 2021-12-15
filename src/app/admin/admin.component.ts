import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsletterSubscription, NewsletterSubscriptionService } from '../services/newsletter.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  newsletterSubscriptions$: Observable<NewsletterSubscription[]>;
  isAuthenticated$: Observable<boolean>;
  userEmail$: Observable<string | null | undefined>;

  newsletterSubscriptionsSummary = '';

  // Login form
  email: string;
  password: string;
  loginErrorMessage: string | null;
  hidePassword = true;

  constructor(
    private authService: AuthService,
    private newsletterSubscriptionService: NewsletterSubscriptionService
  ) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.authService.isAuthenticated();
    this.userEmail$ = this.authService.getUserEmail();

    // Get responses only if authenticated
    this.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        this.newsletterSubscriptions$ = this.newsletterSubscriptionService.getAllNewsletterSubscriptions();

        // Build response summary
        this.newsletterSubscriptions$.subscribe((subscriptions: NewsletterSubscription[]) => {
          if (subscriptions) {
            this.newsletterSubscriptionsSummary = `${subscriptions.length} subscription${subscriptions.length > 1 ? 's' : ''}`;
          }
        });
      }
    });
  }

  login(): void {
    this.authService.signIn(this.email, this.password).then(
      success => {
        console.log('Login OK : ', success);
        this.loginErrorMessage = null;
      },
      error => {
        console.log('Login error : ', error);
        this.loginErrorMessage = error.message;
      }
    );
  }

  logout(): void {
    this.newsletterSubscriptionsSummary = '';
    this.authService.signOut().then(
      success => { console.log('Logout OK : ', success); },
      error => { console.error('Logout Error : ', error); }
    );
  }

}
