import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
    heroes: string[] = ['Dr. Strange','Ironman','Spiderman','Hulk','Moonknight']
    heroeBorrado: string[] = [];

    borrarHeroe(posicion:number){
     var heroeBorrado= this.heroes.splice(posicion,2)
     this.heroeBorrado = heroeBorrado;
    }
 }

