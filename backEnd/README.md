## Detalles del backend

La base de datos utilizada es MySQL por lo que se recomienda crear la base de datos en MySQL Workbench para evitar 
errores al levantar el servidor de Spring Boot.

#### Pasos en la creación del backend
1. Configurar la conexión a MySQL en el archivo _**application.properties**_.
2. En MySQL Workbench, crear la base de datos con el mismo nombre que se le asignó en el archivo _**application.
   properties**_ de Spring Boot.
3. Iniciar el servidor de Spring Boot para corroborar que la conexión esté correctamente configurada.
4. Crear el package _**«models»**_ para los modelos/entidades que van a contener la estructura de la base de datos.
5. Crear la el modelo _**«Producto»**_ con las siguientes notaciones:
   * @Entity - Quién le va a indicar a Spring Boot que este archivo es una _*Entidad*_.
   * @Data - Genera los métodos _*get y set*_.
   * @NoArgsConstructor - Agrega un constructor vacío.
   * @AllArgsConstructor - Agrega un constructor con todos los argumentos.
   * @ToString - Agrega el método ToString.
6. Al crear la tabla _*«productos»*_ con todas sus columnas, clic derecho sobre el nombre de la tabla, _*Alter Table.
   ..*_ y colocar las columnas en el orden deseado, ya que Hibernate lo acomoda por orden alfabético.
7. Crear la **Capa de acceso a datos:** Aquí el package _**«repository»**_ contendrá los archivos de acceso a los 
   objetos de los modelos/entidades de la base de datos.
8. Crear la interfase _**IProductoRepositorio**_ que herede de JpaRepository<> para extender las funcionalidades este.
9. Crear la **Capa de servicios:** Aquí el package _**«services»**_ contendrá los archivos que llevarán toda la 
   lógica necesaria para comunicar. Esta capa de servicios se conectará con la capa de acceso a datos (repository).
10. Crear la interfase _**IProductoServicio**_ que contendrá los métodos básicos para poder recuperar la información 
    de la base de datos:
      * listarProductos()
      * buscarProductoPorId(Integer idProducto)
      * agregarProducto(Producto producto)
      * eliminarProductoPorId(Integer idProducto)
11. Crear una clase «concreta» _**ProductoServicioImp**_ que va a implementar la interfase _*IProductoServicio*_ y 
    la cual llevará la notación @Service.
      * @Autowired _*IProductoRepositorio*_ - Inyectamos esto para comunicarnos con la capa de acceso a datos.
12. Crear el controlador de tipo REST: Aquí el package _**«controllers»**_ contendrá los archivos
13. Crear la clase _**ProductoControlador**_ la cual será un controlador de tipo REST y llevará las siguientes 
    notaciones:
      * @RestController - Le indicará a Spring Boor que esta clase es de tipo REST.
      * @RequestMapping() - Aquí crearemos un context path para hacer las peticiones directamente al nombre de la app.
      * @CrossOrigin(value = "http://localhost:4200") - Hacemos las peticiones del frontend al backend a través de 
        Angular.
14. Inyectamos la capa de servicios para que se comunique con el controlador por medio del @Autowired.
15. Creamos el primer método de tipo GET para obtener todos los objetos de tipo producto.