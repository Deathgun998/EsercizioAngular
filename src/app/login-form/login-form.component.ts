import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  loginUser(e){
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    
    if(username == 'admin' && password == 'admin'){
      this.loginService.changeSubject(true);
      this.router.navigate(['/home']);
    }
  }
}
