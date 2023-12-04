package hd.backEnd.controllers;

import hd.backEnd.models.Producto;
import hd.backEnd.services.ProductoServicioImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author <b>@RequestMapping()</b> - Agrego un «context path» con el nombre de
 * "inventario-app" para que las peticiones (endpoints) no apunten al //localhost:8080, sino que llamen directamente
 * al nombre de la app.
 * De esta forma identificaré de manera única a la app.<br>
 * <b>@CrossOrigin(value = "http://localhost:4200")</b> - haré las peticiones del frontend
 * al backend a través de Angular. El puerto 4200 es el que nos brinda Angular por default.
 */

@RestController
// http://localhost:8080/inventario-app
@RequestMapping("inventario-app")
@CrossOrigin(value = "http://localhost:4200")
public class ProductoControlador {

    @Autowired
    private ProductoServicioImp productoServicio;

    // http://localhost:8080/inventario-app/productos
    @GetMapping("/productos")
    public List<Producto> getAllProducts() {
        List<Producto> productos = this.productoServicio.listarProductos();
        return productos;
    }

    @PostMapping("/productos")
    public Producto addProduct(@RequestBody Producto producto) {
        return this.productoServicio.agregarProducto(producto);
    }
}
