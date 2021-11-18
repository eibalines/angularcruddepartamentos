import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { ActivatedRoute, Params } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-detallesempleado',
  templateUrl: './detallesempleado.component.html',
  styleUrls: ['./detallesempleado.component.css']
})
export class DetallesempleadoComponent implements OnInit {
      public detallesempleado!: Empleado;
      public idempleado!: string;
      @ViewChild ('cajasumar') cajasumar!: ElementRef;
  constructor(private _services: ServiceEmpleados,
              private _route: ActivatedRoute) { }


    getdetalles(idempleado: string): void{
      this._services.getDetallesEmpleado(this.idempleado).subscribe(response =>{
        this.detallesempleado = response;

      })
    }

    incrementarSalario(): void{
      var incremento = this.cajasumar.nativeElement.value;
      var id = this.detallesempleado.idEmpleado.toString();
      this._services.incrementarSalario(id,incremento).subscribe(response => {
        this.getdetalles(this.idempleado);
      })
    
      
    } 


  ngOnInit(): void {
      this._route.params.subscribe((params: Params) =>{
          this.idempleado = params['iddempleado'];
      });

      this.getdetalles(this.idempleado);

  }

}
