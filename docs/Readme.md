### S3:

Se revisaron todos los CRUD y rutas generadas.Funcionan solo con el dato del id que aparecera desconectado en bases de datos que sean alimentadas manualmente o por migrations de sequelize sin actualizar los id's al final de las migraciones. 

Las tablas deben ser creadas desde sequelize y ver si posterior a eso se pueden cargar nuevament desde PGadmin.
LA pregunta es saber si el id se corrompe o deja de ser automatico despues de este paso.
En cuyo caso hay que hacer un create registro (DEl CRUD solo la C) que reciba una lista de jsons separados por coma y cargue todo el servidor y dentro delde node se carguen los registros uno a uno.

Este texto fue antes de investigar sobre migraciones con seguelize.

Hay que hacer un reset manual desde JS con algo parecido a esto:

```jsx
const tableName = 'YourTable';
const sequenceColumn = 'id';

module.exports = {
    up: (queryInterface) => queryInterface.sequelize.transaction(async (transaction) => {
        // Get current highest value from the table
        const [[{ max }]] = await queryInterface.sequelize.query(`SELECT MAX("${sequenceColumn}") AS max FROM public."${tableName}";`, { transaction });
        // Set the autoincrement current value to highest value + 1
        await queryInterface.sequelize.query(`ALTER SEQUENCE public."${tableName}_${sequenceColumn}_seq" RESTART WITH ${max + 1};`, { transaction });
    }),
    down: () => Promise.resolve(),
};
```
Por eso en los create registro POST ejemplos POST ORDERS y POST orderDetails., hay que escribir un id valido en el json , puesto qu un id auto incremental apunta a otro dato, se desfasa.

POST ORDERS los campos date hsta ahorita se asignan manualmente, pero seria mejor que fuese automatico.

Claro esto no es importante si dejamos una app que genera al iniciar (configura) un servidor de DB vacio. 

### S4

Falta hacer un servicio de datos complejo APi de campos a la eleccion del usuario y contestar las preguntas teoricas. Incluir Fotos