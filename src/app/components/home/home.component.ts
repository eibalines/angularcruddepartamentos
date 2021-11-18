import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from 'src/app/services/departamento.service';
import { Departamento } from 'src/app/models/departamento';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public departamentos!: Array<Departamento>;


  constructor(private _service: ServiceDepartamentos) {}

  eliminarDeptos(iddepartamento: number): void{
    this._service.borrarDepartamentos(iddepartamento.toString()).subscribe(response =>{
      this.cargarDepartamentos();
      console.log("Se ejecuta funcion eliminar");
    });
  }
     cargarDepartamentos(): void{
      this._service.getDepartamentos().subscribe(response => {
        this.departamentos = response;
  
      });
     }
  ngOnInit(): void {
    this.cargarDepartamentos();
    
  }
  
 



}
