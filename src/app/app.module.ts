import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DotContentComponent } from './dot-content/dot-content.component';
import { ResponsiveDebugComponent } from './debug/responsive-debug/responsive-debug.component';
import { TreeComponent } from './tree/tree.component';
import { DotComponent } from './dot/dot.component';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { DotMenuComponent } from './dot-menu/dot-menu.component';
import { DotFooterComponent } from './dot-footer/dot-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DotContentComponent,
    ResponsiveDebugComponent,
    TreeComponent,
    DotComponent,
    DotMenuComponent,
    NavbarMenuComponent,
    DotFooterComponent
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
export class AppModule {}
