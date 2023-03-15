import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos: any;


  constructor(private http: HttpClient) { }
  columnas: string[] = ['ide_producto', 'ide_tipoproducto', 'ide_categoria', 'des_producto', 'transaccional', 'txcontrol', 'created_at', 'updated_at'];

  ngOnInit() {
    this.http.get('/assets/js/datos.json').subscribe(data => {
      this.productos = data;
      console.log(this.productos);
    });

    this.productos.forEach(() => {
      console.log(this.productos.data);
    });

  }



}
