import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { Error404Component } from "./components/error404/error404.component";
import { InsertardepartamentosComponent } from "./components/insertardepartamentos/insertardepartamentos.component";
import { ModificardepartamentoComponent } from "./components/modificardepartamento/modificardepartamento.component";
import { TablaempleadosComponent } from "./components/tablaempleados/tablaempleados.component";
import { DetallesempleadoComponent } from "./components/detallesempleado/detallesempleado.component";



const appRoutes: Routes = [
    {path:"", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "insertardepartamentos", component: InsertardepartamentosComponent},
    {path: "modificardepartamentos/:numero/:nombre/:localidad", component: ModificardepartamentoComponent},
    {path: "tablaempleados/:iddepartamento", component: TablaempleadosComponent},
    {path: "detallesempleado/:iddempleado", component: DetallesempleadoComponent}, 
    {path: "**", component: Error404Component}

];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)
