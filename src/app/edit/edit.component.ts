import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';
import { ListService } from '../list.service';
import { Nuovofile } from '../nuovofile';




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  games: Nuovofile[] = [];
  inputValue: string = "";
  currentNuovofile: Nuovofile;
  currentId: string;
  hasChanges: boolean = false;
  
  constructor(private listGames: ListService, private router: Router) {
    this.games = listGames.getNuovofile();
    router.events.subscribe(event => {
    });
  }

  cerca() {
    if (this.inputValue && this.inputValue != "") {
      this.currentNuovofile = this.listGames.getGameByTIPO(this.inputValue);
    }
  }

  modifica() {
    this.listGames.setGame(this.currentNuovofile);
  }

  ngOnInit() {

  }

}