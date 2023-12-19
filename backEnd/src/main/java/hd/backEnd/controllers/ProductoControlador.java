package hd.backEnd.controllers;

import hd.backEnd.exceptions.RecursoNoEncontradoExcepcion;
import hd.backEnd.models.Producto;
import hd.backEnd.services.ProductoServicioImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @GetMapping("/productos/{id}")
    public ResponseEntity<Producto> getProductById(@PathVariable int id) {
        Producto producto = this.productoServicio.buscarProductoPorId(id);
        if(producto != null)
            return ResponseEntity.ok(producto);
        else
            throw new RecursoNoEncontradoExcepcion("No se encontró el id: " + id);
    }

    @PutMapping("/productos/{id}")
    public ResponseEntity<Producto> updateProductById(@PathVariable int id, @RequestBody Producto productoRecibido) {
        Producto producto = this.productoServicio.buscarProductoPorId(id);
        if (producto == null) {
            throw new RecursoNoEncontradoExcepcion("No se encontró el id: " + id);
        }
        producto.setDescripcion(productoRecibido.getDescripcion());
        producto.setPrecio(productoRecibido.getPrecio());
        producto.setExistencia(productoRecibido.getExistencia());
        this.productoServicio.agregarProducto(producto);
        return ResponseEntity.ok(producto);
    }

    @DeleteMapping("/productos/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProductById(@PathVariable int id) {
        Producto producto = productoServicio.buscarProductoPorId(id);
        if (producto == null) {
            throw new RecursoNoEncontradoExcepcion("No se encontró el id: " + id);
        }
        this.productoServicio.eliminarProductoPorId(producto.getIdProducto());
        Map<String, Boolean> respuesta =new HashMap<>();
        respuesta.put("Producto eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
}
