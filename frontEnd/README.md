## Detalles del FrontEnd

Este proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Servidor de desarrollo

Ejecute `ng serve -o` para levantar un servidor de desarrollo y navegue hasta `http://localhost:4200/`.


### Pasos en la creación del frontend

1. Agregar en el archivo _*tsconfig.json*_ (debajo de la propiedad _*"strict:" true,*_) la propiedad _*"strictPropertyInicialization": false*_ para evitar que nos marque error al crear los atributos los la clase «producto».

2. Crear, sobre la carpeta raíz, una clase que va a representar los objetos de tipo Producto con el nombre de _*producto*_:
    * ng g class producto --skip-tests

    >_**NOTA:**_ la bandera «g» significa "generate" y «--skip-tests» se coloca para evitar que se cree la clase de prueba.

3. Crear, sobre la carpeta raíz, los componentes para listar todos los objetos de tipo Producto:
    * ng g c producto-lista --skip-tests

    >_**NOTA:**_ la bandera «c» significa "component" y se coloca para crear componentes en Angular.

4. Eliminar los archivos innecesarios (_*app.component.spect.ts*_ y _*producto-lista.component.css*_) y (dentro del archivo _*producto-lista.ts*_) eliminar la línea donde figura el styleUrls:

5. Quitamos todo el contenido que hay en el archivo _*app.component.html*_ y lo colocamos en el archivo _*producto-lista.component.html*_.

6. En el archivo _*app.component.html*_ colocamos solamente el componente de _*app-producto-lista*_.
