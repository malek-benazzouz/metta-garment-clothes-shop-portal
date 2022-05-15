import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private auth: AngularFireAuth) {}

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

}
