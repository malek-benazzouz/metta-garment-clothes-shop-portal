
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResponsiveDebugComponent } from './debug/responsive-debug/responsive-debug.component';
import { TreeComponent } from './tree/tree.component';
import { DotMenuComponent } from './dot-menu/dot-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ResponsiveDebugComponent,
    TreeComponent,
    DotMenuComponent,
    NavbarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
