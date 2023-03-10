import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`
        <h1>{{title}}</h1>.
        <h3>La base es <strong> {{base}} </strong></h3>

        <button (click)="acumular(base)">  + {{base}} </button>
        <span style="font-size: 30px;"> {{numero}} </span>
        <button (click)="acumular(-base)"> - {{base}} </button>
    `
})

export default class ContadorComponent{
    title:string = 'Acumulador App';
    numero:number = 10;
    base: number = 5;
  
    acumular(valor: number){
        this.numero += valor
    }
}