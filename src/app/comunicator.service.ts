import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { Nuovofile } from './nuovofile';

 @Injectable()
 export class ComunicatorService {

  private mySubject = new Subject<Nuovofile>();

  public mySubject$ = this.mySubject.asObservable();

  changeSubject(value: Nuovofile) {
    
     this.mySubject.next(value);
    }
}
