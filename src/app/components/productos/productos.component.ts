import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from './productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
    constructor(private http: HttpClient) {

  }
  Productos: Productos[] = [];

  ngOnInit(){
    this.http.get<Productos[]>('assets/produtos.json').subscribe(data => {
      this.Productos = data;
      console.log(this.Productos);
    });
  }
}
