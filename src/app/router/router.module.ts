import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';
import { ListComponent } from '../listComponent/list.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { ControllaService } from '../controlla.service';


const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "list", component: ListComponent},
    {path: "detail/:id", component: DetailComponent},
    {path: "login",component: LoginFormComponent,canActivate:[ControllaService]},
    {path: "", redirectTo: "login", pathMatch: "full"}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRouterModule { }