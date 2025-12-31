import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ComingSoonPageComponent } from "./coming-soon-page/coming-soon-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'dot', component: HomePageComponent, data: { expandDot: true } },
  { path: 'coming-soon', component: ComingSoonPageComponent }, // Temporary page while waiting for launch
  { path: 'admin', component: AdminPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

