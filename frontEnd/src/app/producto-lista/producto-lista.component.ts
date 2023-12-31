import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html'
})
export class ProductoListaComponent {
  productos: Producto[];

  constructor(
    private productoServicio: ProductoService,
    private enrutador: Router
  ) {}

  ngOnInit(){
    // Cargamos todos los productos
    this.obtenerProductos();
  }

  private obtenerProductos() {
    // Consumir los datos del observable (suscribirnos)
    this.productoServicio.getProductList().subscribe(
      (datos => {this.productos = datos})
    )
  }

  editarProducto(id: number) {
    this.enrutador.navigate(['editar-producto', id]);
  }

  eliminarProducto(id: number) {
    this.productoServicio.deleteProductById(id).subscribe(
      {
        next: (datos) => this.obtenerProductos(),
        error: (err) => console.log(err)
      }
    );
  }
}
