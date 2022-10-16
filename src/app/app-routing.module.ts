import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ComingSoonPageComponent } from './coming-soon-page/coming-soon-page.component';

const routes: Routes = [
  { path: '', component: ComingSoonPageComponent },
  // { path: 'home', component: HomePageComponent }, // Uncomment to work on home-page page
  { path: 'admin', component: AdminPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

