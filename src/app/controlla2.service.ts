import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class Controlla2Service {

  constructor(private router: Router, private loginService: LoginService) { }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (sessionStorage.getItem("logged") && sessionStorage.getItem("logged") === "false") {
      this.router.navigate(['/login']);
      return false;
    }
    else 
    {
      return true;
    }
  }

}
