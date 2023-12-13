import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
})
export class EditarProductoComponent {
  producto: Producto = new Producto();
  id: number;

  constructor(
    private productoServicio: ProductoService,
    private ruta: ActivatedRoute,
    private enrutador: Router
  ) {}

  ngOnInit() {
    this.id = this.ruta.snapshot.params['id'];
    this.productoServicio.getProductById(this.id).subscribe(
      {
        next: (datos) => this.producto = datos,
        error: (err: any) => console.log(err)
      }
    );
  }

  onSubmit() {
    // Editar el producto
    this.guardarProductoEditado();
  }

  guardarProductoEditado() {
    this.productoServicio.updateProductById(this.id, this.producto).subscribe(
      {
        next: (datos) => this.irProductoLista(),
        error: (err: any) => console.log(err)
      }
    );
  }

  irProductoLista() {
    this.enrutador.navigate(['/productos'])
  }
}
