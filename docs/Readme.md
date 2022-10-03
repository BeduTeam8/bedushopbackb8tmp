### S3:  ✅
NOTA: 
Se revisaron todos los CRUD y rutas generadas.La BD fue cargada con los Datasets de S2 Funcionan los servicios solo que las sequencias de Postgres fueron desconectadas. Se recomienda empezar con una BD limpia y que sequelize lleve la cuenta de los id's.

Para corregir se hace con migrations de sequelize actualizando los id's al final de las migraciones. 

Hay que hacer un reset manual o actualizacion manual de las sequencias de PG desde JS con algo parecido a esto:

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
### S4

Falta hacer un servicio de datos complejo APi de campos a la eleccion del usuario y contestar las preguntas teoricas. Incluir Fotos

### S5  ✅
Generó Cart segun Diseno del APi ![](./DisenoAPIBedushop.html)
Aun no se bloquean servicios ni cancelan. Se tienen CRUDS completos en todas las entidades.
### S6 Vamos a S6
