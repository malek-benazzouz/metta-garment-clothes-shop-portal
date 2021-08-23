import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface NewsletterSubscription {
  // Form input
  email: string;
  // Metadata
  subscriptionDate: { timestamp: number, formatted: string };
}

@Injectable({ providedIn: 'root' })
export class NewsletterSubscriptionService {

  constructor(private store: AngularFirestore, private auth: AngularFireAuth) {}

  public signIn(email: string, password: string): Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  public signOut(): Promise<any> {
    return this.auth.signOut();
  }

  public isAuthenticated(): Observable<boolean> {
    return this.auth.user.pipe(map(user => user !== null));
  }

  public getUserEmail(): Observable<string | null | undefined> {
    return this.auth.user.pipe(map(user => user?.email));
  }

  public addNewsletterSubscription(subscription: NewsletterSubscription): Promise<DocumentReference<NewsletterSubscription>> {
    return this.store.collection<NewsletterSubscription>('newsletter-subscriptions').add(subscription);
  }

  public getAllNewsletterSubscriptions(): Observable<NewsletterSubscription[]> {
    return this.store.collection<NewsletterSubscription>('newsletter-subscriptions').valueChanges();
  }

}
