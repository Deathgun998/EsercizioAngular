import { Nuovofile } from "./nuovofile";

export class ListService{
    private items: Nuovofile[] =[
        new Nuovofile(1,"ok","kappa",0),
        new Nuovofile(2,"esatto","cypo",8),
        new Nuovofile(3,"maina","gioia",5) 
        ]
getNuovofile(): Nuovofile[]{
return this.items;
}

getNuovofileById(id:number): Nuovofile{
    for(let nuovofile of this.items)
        if(nuovofile.id==id)
        return this.clone(nuovofile);
    return null;
}
clone(item: Nuovofile){
    return new Nuovofile(item.id, item.description, item.name, item.genre);
  }
  getGameByTIPO(tipo: string): Nuovofile {
    for(let item of this.items)
    {
      if(item.description == tipo)
      {
        return item;
        
      }
    }
  }


  setGame(item: Nuovofile){
    for(let item2 of this.items)
    {
      if(item2.id == item.id)
      {
        item2.description = item.description;
        item2.name = item.name;
        item2.genre = item.genre; 
       
        alert("modificato");
      }
    }
  }

  findGame(tipo: string): boolean{
    let found: boolean = false;
    for(let item of this.items)
    {
      if(item.description == tipo)
      {
        found = true;
        
      }
    }
    return found;
  }

}