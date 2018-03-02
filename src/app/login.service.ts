import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class LoginService {
  private mySubject = new Subject<boolean>();
  public mySubject$ = this.mySubject.asObservable();
  changeSubject(value: boolean) { 
    this.mySubject.next(value); 
    if(value==true)
    sessionStorage.setItem("logged","true");
    else
    sessionStorage.setItem("logged","false");
  }
}
