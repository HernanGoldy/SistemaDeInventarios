package hd.backEnd.services;

/*
Agrego los métodos básicos para poder recuperar información de la DB:
1. Listar productos - Solo coloco la firma, ya que esto es una interfaz.
2. Buscar un producto por ID.
3. Agregar un objeto de tipo Producto - Si el ID del producto no existe, lo inserta. Caso contrario, lo actualiza.
4. Eliminar un producto por su ID.
*/

import hd.backEnd.models.Producto;

import java.util.List;

public interface IProductoServicio {

    // 1.
    public List<Producto> listarProductos();

    // 2.
    public Producto buscarProductoPorId(Integer idProducto);

    // 3.
    public Producto agregarProducto(Producto producto);

    // 4.
    public void eliminarProductoPorId(Integer idProducto);
}
