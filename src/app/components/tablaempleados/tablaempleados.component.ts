import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/empleado.service';
import  { Empleado } from 'src/app/models/empleado';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tablaempleados',
  templateUrl: './tablaempleados.component.html',
  styleUrls: ['./tablaempleados.component.css']
})
export class TablaempleadosComponent implements OnInit {
    public empleados!: Array<Empleado>;
    iddepartamento!: string;

  constructor(private _service: ServiceEmpleados,
    private _route: ActivatedRoute) { }

    getEmpleados(iddepartamento: string){
        this._service.getEmpleadosDepto(this.iddepartamento).subscribe( response =>{
            this.empleados = response;
           
        });
      
    }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.iddepartamento = params['iddepartamento'];
      
 });
    this.getEmpleados(this.iddepartamento);
  }


}
