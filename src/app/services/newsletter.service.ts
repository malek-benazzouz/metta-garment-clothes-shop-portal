import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface NewsletterSubscription {
  // Form input
  email: string;
  // Metadata
  subscriptionDate: { timestamp: number, formatted: string };
}

@Injectable({ providedIn: 'root' })
export class NewsletterService {

  private readonly isProduction = false; // TODO prodReadiness set to true

  constructor(private store: AngularFirestore) {}

  public addNewsletterSubscription(subscription: NewsletterSubscription): Promise<DocumentReference<NewsletterSubscription>> {
    if (!this.isProduction) {
      return Promise.resolve() as Promise<any>;
    }
    return this.store.collection<NewsletterSubscription>('newsletter-subscriptions').add(subscription);
  }

  public getAllNewsletterSubscriptions(): Observable<NewsletterSubscription[]> {
    return this.store.collection<NewsletterSubscription>(
      'newsletter-subscriptions',
      ref => ref.orderBy('subscriptionDate.timestamp')
    ).valueChanges();
  }

}
