import { Nuovofile } from "./nuovofile";

export class ListService{
    private items: Nuovofile[] =[
        new Nuovofile(1,"","",0),
        new Nuovofile(2,"esatto"),
        new Nuovofile(3,"maina","gioia") 
        ]
getNuovofile(): Nuovofile[]{
return this.items;
}

getNuovofileById(id:number): Nuovofile{
    for(let nuovofile of this.items)
        if(nuovofile.id==id)
        return nuovofile;
    return null;
}
}