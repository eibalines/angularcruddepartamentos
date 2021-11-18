import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from 'src/app/services/departamento.service';
import { Departamento } from 'src/app/models/departamento';
import { ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-modificardepartamento',
  templateUrl: './modificardepartamento.component.html',
  styleUrls: ['./modificardepartamento.component.css']
})
export class ModificardepartamentoComponent implements OnInit {
  @ViewChild ('cajanum') cajanum!: ElementRef;
  @ViewChild ('cajanom') cajanom!: ElementRef;
  @ViewChild ('cajaloca') cajaloca!: ElementRef;
  public departamento!: Departamento;

  constructor(private _service: ServiceDepartamentos,
    private _router: Router, private _recuperarparams: ActivatedRoute) { }

  ngOnInit(): void {
    this._recuperarparams.params.subscribe((params: Params) =>{
      var numero = parseInt(params['numero']);
      this.departamento = new Departamento(numero, params['nombre'], params['localidad'])
    })
  }

  editarDepartamento(): void{
    var nom = this.cajanom.nativeElement.value;
    var loca = this.cajaloca.nativeElement.value;
    this.departamento.nombre = nom,
    this.departamento.localidad = loca;
    console.log(this.departamento);
    this._service.modificarDepartamento(this.departamento).subscribe(response => {
      this._router.navigate(["/home"]);
    })
  }
}
