FALTA ejecutar los demas POST (Solo se han revisado 2) PATCH, PUT, DELETE. VER patallas en README-S3

POST ORDERS los campos date hsta ahorita se asignan manualmente, pero seria mejor que fuese automatico.

Las tablas deben ser creadas desde sequelize y ver si posterior a eso se pueden cargar nuevament desde PGadmin.
LA pregunta es saber si el id se corrompe o deja de ser automatico despues de este paso.
En curo caso hay que hacer un create registro (DEl CRUD solo la C) que reciba una lista de jsons separados por coma y cargue todo el servidor y dentro delde node se carguen los registros uno a uno.
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
Se revisaron 2 POST mas POST ORDERS y POST orderDetails. estan funcionando como C, pero no con un id valido auto incremental.

Claro esto no es importante si dejamos una app que genera al iniciar configura un servidor de DB vacio. 
