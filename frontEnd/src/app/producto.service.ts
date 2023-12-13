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

  // Método para obterer un producto por su id
  getProductById(id: number) {
    return this.clienteHttp.get<Producto>(`${this.urlBase}/${id}`);
  }

  // Método para editar/actualizar un producto por su id
  updateProductById(id: number, producto: Producto): Observable<Object> {
    return this.clienteHttp.put(`${this.urlBase}/${id}`, producto);
  }
}
