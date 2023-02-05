import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  // { path: '', component: ComingSoonPageComponent }, // Temporary page while waiting for launch
  { path: '', component: HomePageComponent },
  { path: 'dot', component: HomePageComponent, data: { expandDot: true } },
  { path: 'admin', component: AdminPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

