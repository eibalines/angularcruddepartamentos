import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProviders, routing } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceDepartamentos } from './services/departamento.service';
import { ServiceEmpleados } from './services/empleado.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { InsertardepartamentosComponent } from './components/insertardepartamentos/insertardepartamentos.component';
import { ModificardepartamentoComponent } from './components/modificardepartamento/modificardepartamento.component';
import { TablaempleadosComponent } from './components/tablaempleados/tablaempleados.component';
import { DetallesempleadoComponent } from './components/detallesempleado/detallesempleado.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    Error404Component,
    InsertardepartamentosComponent,
    ModificardepartamentoComponent,
    TablaempleadosComponent,
    DetallesempleadoComponent,
  ],
  imports: [
    BrowserModule, routing, HttpClientModule, FormsModule
  ],
  providers: [appRoutingProviders, ServiceDepartamentos, ServiceEmpleados],
  bootstrap: [AppComponent]
})
export class AppModule { }
