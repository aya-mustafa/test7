import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { CardComponentComponent } from './component/card-component/card-component.component';

const routes: Routes = [
  {path:"",component:CardComponentComponent},
  {path:"dashboard", component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
