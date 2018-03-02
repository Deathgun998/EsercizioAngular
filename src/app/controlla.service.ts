import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class ControllaService{

  constructor(private router: Router,private loginService: LoginService) { }



canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
  if(sessionStorage.getItem("logged")=="true"){
  return true;}
else{
  this.router.navigate(['/home']);
  return false;
}
}

}
