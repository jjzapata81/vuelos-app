import { Router, RouterModule, Routes } from "@angular/router";
import { HelpComponent } from "./pages/help/help.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
  {
    path: '',
    component: HelpComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class HelpRoutingModule{}
