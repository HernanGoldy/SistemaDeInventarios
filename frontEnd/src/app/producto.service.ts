import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private urlBase = 'http://localhost:8080/inventario-app/productos';

  constructor(private clienteHttp: HttpClient) {}

  // Método para obteter todos los objetos de tipo Producto
  getProductList(): Observable<Producto[]> {
    return this.clienteHttp.get<Producto[]>(this.urlBase);
  }

  // Método para agregar un nuevo producto
  addProduct(producto: Producto): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, producto);
  }
}
