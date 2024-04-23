import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './flight/pages/search/search.component';
import { HelpComponent } from './help-center/pages/help/help.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },{
    path:'help',
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
