import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private loginService: LoginService) { }

  ngOnInit() {
  }
logout(){
  this.loginService.changeSubject(false);
  this.router.navigate(['/login']);
}
}
