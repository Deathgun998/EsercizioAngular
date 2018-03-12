export class Nuovofile{
    description: string;
    name: string;
    genre: number;
    id: number

    constructor(id: number,tipo: string = "esatto", tipoe: string ="sì",tipoes: number = undefined){
this.id = id;
this.description = tipo;
this.name = tipoe
this.genre = tipoes}

}