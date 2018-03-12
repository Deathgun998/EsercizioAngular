import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './listComponent/list.component';
import { ListService } from './list.service';
import { DetailComponent } from './detail/detail.component';
import { ComunicatorService } from './comunicator.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DemoRouterModule } from './router/router.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginService } from './login.service';
import { ControllaService } from './controlla.service';
import { EditComponent } from './edit/edit.component';
import { Controlla2Service } from './controlla2.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    HeaderComponent,
    HomeComponent,
    LoginFormComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DemoRouterModule
  ],
  providers: [ListService,ComunicatorService, LoginService,ControllaService,Controlla2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
