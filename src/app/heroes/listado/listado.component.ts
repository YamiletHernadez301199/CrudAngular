import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public heroes : string[] = ['yami','yu','alo'];
  public usuarios:any = [
    {id:1,nombre:"Yamilet"},
    {id:2,nombre:"Yuleimi"},
    {id:3,nombre:"Alondra"}
  ];
  public datos:any =[
    {id:1,nombre:"uriel",edad:"25"},
    {id:2,nombre:"yami",edad:"23"},
  ];
}
