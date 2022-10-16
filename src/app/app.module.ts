import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { DotPageComponent } from './dot-page/dot-page.component';
import { ResponsiveDebugComponent } from './debug/responsive-debug/responsive-debug.component';
import { TreePageComponent } from './tree-page/tree-page.component';
import { DotToggleComponent } from './dot-toggle/dot-toggle.component';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { DotMenuComponent } from './dot-menu/dot-menu.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LegalInfoComponent } from './legal-info/legal-info.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { ContactLinksComponent } from './contact-links/contact-links.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { LegalLinksComponent } from './legal-links/legal-links.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductPageComponent } from './product-page/product-page.component';
import { ComingSoonPageComponent } from './coming-soon-page/coming-soon-page.component';
import { NewsletterFormComingSoonComponent } from './newsletter-form-coming-soon/newsletter-form-coming-soon.component';
import { AngularResizeEventModule } from 'angular-resize-event';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    DotPageComponent,
    ResponsiveDebugComponent,
    TreePageComponent,
    DotToggleComponent,
    DotMenuComponent,
    NavbarMenuComponent,
    LegalInfoComponent,
    NewsletterFormComponent,
    NewsletterFormComingSoonComponent,
    ContactLinksComponent,
    CopyrightComponent,
    LegalLinksComponent,
    ProductOverviewComponent,
    ProductPageComponent,
    AdminPageComponent,
    ComingSoonPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AngularResizeEventModule,
    NgbModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
