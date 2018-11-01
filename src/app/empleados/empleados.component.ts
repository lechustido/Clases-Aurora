import { Component } from "@angular/core";

@Component({
    selector: 'empleados',
    templateUrl: './empleados.component.html'
})

export class EmpleadosComponent{
    public nombreEmpleado : string;
    public apellidoEmpleado : string;
    public esperandoValor: string;

    constructor(){
        this.nombreEmpleado = "Pepe";
        this. apellidoEmpleado = "Manuel";
        this.esperandoValor = "";
    }

    ngOnInit(){
      
    }

    holaMundo(nombreEmpleado){
        alert("Hola " + this.nombreEmpleado + " " + this.apellidoEmpleado + " " + nombreEmpleado);
    }

    darValor(){
        this.esperandoValor = "Hola";
    }

}