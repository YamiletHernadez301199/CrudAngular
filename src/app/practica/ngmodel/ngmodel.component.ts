import { Component } from '@angular/core';
@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.css']
})
export class NgmodelComponent {
  public personas : string = 'Hola desde practica';
  public inventario:any = [
    {id:1, nombre:'Pantalon', precio:250},
    {id:2, nombre:'Chamarra', precio:500}
  ];
  public formulario:any ={
    id:null,
    nombre:null,
    precio:null
  }
  public seleccionar(articulos:any) : void {
    this.formulario.id = articulos.id;
    this.formulario.nombre = articulos.nombre;
    this.formulario.precio = articulos.precio;
   }
  public eliminar(id:number) : void {
    for (let index = 0; index < this.inventario.length; index++) {
      if (this.inventario[index].id == id) {
        this.inventario.splice(index,1);
        alert("Eliminado con exito");
        break;
      }
      
    }
   }
  public agregar() : void {
    let datoNuevo ={
      id : this.formulario.id,
      nombre : this.formulario.nombre,
      precio : this.formulario.precio
    };
    this.inventario.push(datoNuevo);
    alert("Agregado con exito");
    this.resetForm()
  }
  public editar(id:any) : void {
    for (let index = 0; index < this.inventario.length; index++) {
      if (this.inventario[index].id == id) {
        this.inventario[index].id = this.formulario.id;
        this.inventario[index].nombre = this.formulario.nombre;
        this.inventario[index].precio= this.formulario.precio;
        alert("Se actuzalizo con exito!!");
        break;
      }
      
    }
  }
  resetForm() {
    this.formulario.reset();
  }
}
