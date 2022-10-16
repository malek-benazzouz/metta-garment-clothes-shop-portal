import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsletterSubscription, NewsletterService } from '../services/newsletter.service';
import { AuthService } from '../services/auth.service';
import { CsvRow, ExportService } from '../services/export.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  newsletterSubscriptions$: Observable<NewsletterSubscription[]>;
  isAuthenticated$: Observable<boolean>;
  userEmail$: Observable<string | null | undefined>;

  newsletterSubscriptionsSummary = '';

  newsletterSubscriptionsAsCsv: CsvRow[];

  // Login form
  email: string;
  password: string;
  loginErrorMessage: string | null;
  hidePassword = true;

  constructor(
    private authService: AuthService,
    private newsletterService: NewsletterService,
    private exportService: ExportService
  ) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.authService.isAuthenticated();
    this.userEmail$ = this.authService.getUserEmail();

    // Get responses only if authenticated
    this.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        this.newsletterSubscriptions$ = this.newsletterService.getAllNewsletterSubscriptions();

        // Build response summary
        this.newsletterSubscriptions$.subscribe((subscriptions: NewsletterSubscription[]) => {
          if (subscriptions) {
            this.newsletterSubscriptionsSummary = `${subscriptions.length} subscription${subscriptions.length > 1 ? 's' : ''}`;
            this.newsletterSubscriptionsAsCsv = subscriptions.map(s => ({
              Email: s.email,
              'Subscription date': s.subscriptionDate.formatted
            }));
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

  exportAsCsv(): void {
    const filename = 'Metta clothing newsletter subscriptions - '
      + new Date().toISOString().replace('T', ' ').replace('Z', '').replace(':', 'h').slice(0, -7);
    this.exportService.exportAsCsv(this.newsletterSubscriptionsAsCsv, filename);
  }

}
