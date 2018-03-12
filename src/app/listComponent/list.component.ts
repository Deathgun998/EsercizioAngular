import { Component,EventEmitter, Input,Output } from '@angular/core';
import { Router} from '@angular/router';
import { Nuovofile } from '../nuovofile';
import { ComunicatorService } from '../comunicator.service';
import { ListService } from '../list.service';



@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
 


  items: Nuovofile[] ;

 constructor(private router: Router, private listService: ListService){
   
}

ngOnInit() {
  this.items = this.listService.getNuovofile();
  
}
ngOnDestroy() {
 
  
}

   cliccami(item: Nuovofile){
    this.router.navigate(['/detail/'+item.id]);
    }
}
