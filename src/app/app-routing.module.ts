import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './flight/pages/search/search.component';
import { LoginComponent } from './login/components/login.component';
import { FlightComponent } from './flight/pages/flight/flight.component';
import { isFlightGuard } from './login/guards/is-flight.guard';
import { isActiveGuard } from './login/guards/is-active.guard';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'flight',
    canActivate: [isActiveGuard,isFlightGuard],
    component:FlightComponent
  },
  {
    path:'help',
    canActivate:[isActiveGuard],
    loadChildren: () => import('./help-center/help.module').then(m => m.HelpModule)
  },
  {
    path:'**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
