import { Component } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent {
  public equipos:any =[
    {id:1,nombre:"Laptop",marca:"Hp",modelo:"ProBook",memoria:"8 ram ddr4",procesador:"intel core i7",discoDuro:"ssd"},
    {id:2,nombre:"Laptop Lenovo",marca:"Lenovo",modelo:"20WM0017US",memoria:"RAM de 16 GB",procesador:" Intel Core i7-1165G7",discoDuro:"SSD de 512 GB"},
    {id:3,nombre:"HP Spectre x360",marca:"HP",modelo:"Spectre x360",memoria:"RAM de 16 GB",procesador:"Intel Core i7-1165G7",discoDuro:"SSD de 1 TB"},
    {id:4,nombre:"Apple MacBook Pro",marca:" Apple",modelo:"MacBook Pro",memoria:"RAM de 16 GB",procesador:" Intel Core i9 de 8 núcleos",discoDuro:"SSD de 1 TB"},
    {id:5,nombre:"Lenovo ThinkPad X1 Carbon",marca:"Lenovo",modelo:"ThinkPad X1 Carbon",memoria:" RAM de 16 GB",procesador:"Intel Core i7-1185G7",discoDuro:" SSD de 1 TB"},
    {id:6,nombre:"ASUS ZenBook 14",marca:"ASUS",modelo:" ZenBook 14",memoria:"RAM de 16 GB",procesador:"AMD Ryzen 7 5800U",discoDuro:"SSD de 1 TB"},
    {id:7,nombre:"Acer Swift 5",marca:"Acer",modelo:"Swift 5",memoria:"RAM de 16 GB",procesador:"ntel Core i7-1165G7",discoDuro:" SSD de 1 TB"},
    {id:8,nombre:"Razer Blade 15",marca:"Razer",modelo:"Blade 15",memoria:" RAM de 16 GB",procesador:"Intel Core i7-10750H",discoDuro:"SSD de 512 GB"},
  ];
  public mayorEdad(edad:number) : boolean{
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }
  }
}
