import { Component } from "@angular/core";
import {Empleado} from "./Empleado"

@Component({
    selector: 'empleados',
    templateUrl: './empleados.component.html'
})

export class EmpleadosComponent{
    public nombreEmpleado : string;
    public apellidoEmpleado : string;
    public esperandoValor: string;
    public mostrar: boolean; 
    public arrayay: Array<string>  = []; 
    public profeLengua: string;
   public empleado: Empleado; 

    constructor(){
        this.nombreEmpleado = "Mlem";
        this. apellidoEmpleado = "Mlem";
        this.esperandoValor = "";
        this.mostrar=true;
        this.profeLengua = "Tate";

        this.empleado = new Empleado("Tate", "Langdon", 19);
        
        this.arrayay = [
                "nombre","Gonzalo",
                "apellido","Parker"
        ];
        var uno = 8;
        var dos = 15;
        console.log('Dentro de mi ' + uno);
        if(uno === 8){
        let uno = 3;
        var dos = 88;
        console.log('Dentro de mi ' + uno);
        }   
        console.log('Dentro de mi ' + uno);
    }

    ngOnInit(){
      console.log (this.empleado);
      console.log (this.empleado.nombre);
      this.empleado.nombre = "Gonzalo!";
      console.log (this.empleado.nombre);
    }

    holaMundo(nombreEmpleado){
        alert("Hola " + this.nombreEmpleado + " " + this.apellidoEmpleado + " " + nombreEmpleado);
    }

    darValor(){
        this.esperandoValor = "Hola";
    }

}