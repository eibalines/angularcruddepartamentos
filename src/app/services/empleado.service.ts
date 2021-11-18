import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class ServiceEmpleados{
    constructor(private _http: HttpClient){}

getEmpleadosDepto(iddepartamento: string): Observable<any>{
    var request = "api/Empleados/EmpleadosDepartamento/" + iddepartamento;
    var url = Global.urlempleadosDepartamento + request;
    return this._http.get(url);
}
getDetallesEmpleado(idempleado: string): Observable<any>{
    var request = "api/empleados/" + idempleado;
    var url = Global.urlDetallesEmpleado + request;
    return this._http.get(url);
}

incrementarSalario(iddempleado: string, incremento: string){
    var request = "api/empleados/IncrementarSalario/" + iddempleado + "/" + incremento;
    var url = Global.urlDetallesEmpleado + request;
    var header = new HttpHeaders().set("Content-Type", "application/json")
    return this._http.put(url, {Headers:header}); 
}
}
