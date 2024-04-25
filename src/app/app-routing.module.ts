import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './flight/pages/search/search.component';
import { HelpComponent } from './help-center/pages/help/help.component';
import { BookingsComponent } from './bookings/pages/bookings/bookings.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path:'bookings',
    component: BookingsComponent,
    canActivate: [authGuard]
  },
  {
    path:'help',
    loadChildren: () => import('./help-center/help.module').then(m => m.HelpModule)
  },
  {
    path:'**',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
