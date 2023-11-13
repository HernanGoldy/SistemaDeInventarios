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
   lógica necesaria para comunicar.
10. Crear la interfase _**IProductoServicio**_ que es la que se va a encargar de recuperar la información de la base 
    de datos.