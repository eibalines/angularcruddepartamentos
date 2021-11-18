import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { ServiceDepartamentos } from 'src/app/services/departamento.service';
import { Departamento } from 'src/app/models/departamento';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-insertardepartamentos',
  templateUrl: './insertardepartamentos.component.html',
  styleUrls: ['./insertardepartamentos.component.css']
})
export class InsertardepartamentosComponent implements OnInit {
  @ViewChild ('cajanombre') cajanombre!: ElementRef;
  @ViewChild ('cajanumero') cajanumero!: ElementRef;
  @ViewChild ('cajalocalidad') cajalocalidad!: ElementRef;
  
  
  
  constructor(private _service: ServiceDepartamentos,
    private _router: Router
    ) { }

  ngOnInit(): void {
   
  }

  insertarDepartamentos(): void{
    var nombre = this.cajanombre.nativeElement.value;
    var numero = this.cajanumero.nativeElement.value;
    var localidad = this.cajalocalidad.nativeElement.value;
    var departamento = new Departamento (parseInt(numero), nombre, localidad);
    this._service.insertarDepartamento(departamento).subscribe(response => {
      this._router.navigate(["/home"]);
    });
  }

}
