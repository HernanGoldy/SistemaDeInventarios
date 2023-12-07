import { Component } from '@angular/core';
import { Producto } from '../producto';
import { Router } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
})

export class AgregarProductoComponent {
  producto: Producto = new Producto();

  constructor(
    private productoServicio: ProductoService,
    private enrutador: Router
  ) {}

  onSubmit() {
    this.guardarProducto();
  }

  guardarProducto() {
    this.productoServicio.addProduct(this.producto).subscribe(
      {
        next: (datos) => {this.irListaProductos();},
        error: (err: any) => {console.log(err)}
      }
    );
  }

  irListaProductos() {
    this.enrutador.navigate(['/productos']);
  }
}
