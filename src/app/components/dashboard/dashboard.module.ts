import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
