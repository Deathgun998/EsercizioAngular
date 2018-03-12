import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';
import { ListComponent } from '../listComponent/list.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { ControllaService } from '../controlla.service';
import { Controlla2Service } from '../controlla2.service';
import { EditComponent } from '../edit/edit.component';


const routes: Routes = [
  { path: "home", component: HomeComponent, canActivate: [Controlla2Service] },
  { path: "list", component: ListComponent, canActivate: [Controlla2Service] },
  { path: "detail/:id", component: DetailComponent, canActivate: [Controlla2Service] },
  { path: "edit", component: EditComponent, canActivate: [Controlla2Service] },
  { path: "login", component: LoginFormComponent, canActivate: [ControllaService] },
  { path: "", redirectTo: "login", pathMatch: "full" }
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