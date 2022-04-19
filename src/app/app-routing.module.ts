import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const routes: Routes = [
  { path: '', component: ComingSoonComponent },
  // { path: 'home', component: HomeComponent }, // Uncomment to work on home page
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

