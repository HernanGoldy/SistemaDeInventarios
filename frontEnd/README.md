## Detalles del FrontEnd

Este proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Servidor de desarrollo

Ejecute `ng serve -o` para levantar un servidor de desarrollo y navegue hasta `http://localhost:4200/`.


### Pasos en la creación del frontend
1. Agregar en el archivo _*tsconfig.json*_ (debajo de la propiedad _*"strict:" true,*_) la propiedad _*"strictPropertyInicialization": false*_ para evitar que nos marque error al crear los atributos los la clase «producto».
2. Crear, sobre la carpeta raíz, una clase que va a representar los objetos de tipo Producto con el nombre de _*producto*_.
    * ng g class producto --skip-tests

    >_**NOTA: --skip-tests**_ se coloca para evitar que se cree la clase de prueba.