import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient ,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Departamento } from "../models/departamento";


@Injectable()
export class ServiceDepartamentos{
    constructor(private _http: HttpClient){}
    
    getDepartamentos(): Observable<any>{
        var request = "api/departamentos";
        var url = Global.urldepartamentos + request;
        return this._http.get(url);
    }

    insertarDepartamento(departamento: Departamento): Observable<any>{
        //la funcion JSON.stringify() convierte a formato json
        var json = JSON.stringify(departamento);
        //DEBEMOS INDICAR EL TIPO DE OBJETO QUE VAMOS A ENVIAR
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var request = "api/departamentos"
        var url = Global.urldepartamentos + request;
        //para INSERTAR: indico la url, los datos que insertamos, 
        //y con {{headers: header}} le indico el tipo de datos a enviar
        return this._http.post(url, json, {headers: header});
    }

    modificarDepartamento(departamento: Departamento): Observable<any>{
        var json = JSON.stringify(departamento);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var request = "api/departamentos" 
        var url = Global.urldepartamentos + request;
       
        return this._http.put(url, json, {headers: header});
    }
    
    borrarDepartamentos(iddepartamento: string): Observable<any>{
        var request = "api/departamentos/" + iddepartamento;
        var url = Global.urldepartamentos + request;
        return this._http.delete(url);

    }
}