Here you will find all the planning design and scope documentation for this development sesion.

 
- Proj Objs
- Phases & Time Planning
- Architecture & Tools definition, Tooling

[`Backend Fundamentals`](../../README.md) > [`Sesión 02`](../README.md) > `Postwork`

# Postwork S2

## 🎯 Objetivo

- Crear una base de datos con tablas y registros.

## ⚙️ Setup
 - PosgreSQL

## 📑 Deliverables S2

Create and config a database for the project. **BeduShop**. 

1.  ERD for the project (first aproach)    ✅
![Diagrama1 entidad relación con las entidades del proyecto ](./images/ERD-entitiesRelsTablesDiagram.png) 

 ERD for the project (second aproach)    ✅
![Diagrama1 entidad relación con las entidades del proyecto](./images/ERD-dbschema.png)

2. Conectivity to DB in local docker  ✅ and Heroku dB ✅

- ![Conexión mediante PgAdmin4 al servidor de heroku](./images/screenPgadminHerokuDB.png)

- ![Prueba en Docker/Local](./images/screenPgadminDckrDB.png)


3. db Schema used and tested via PGAdmin   ✅
![Traducción del modelo relacional que definimos a un esquema de base de datos](./images/dbschema.png)   

4. Datasets to populate dB. 
Generated, related and loaded to folder.    ✅  DB upload    ✅
- ![users dataset](./datasets/users.csv)
- ![products dataset](./datasets/products.csv)
- ![categories dataset](./datasets/categories.csv)
- ![orders dataset](./datasets/orders.csv)
- ![details dataset](./datasets/-details.csv)
- ![reviews dataset](./datasets/reviews.csv)



5. First Queries to the dB.   ✅ 

SQLScript to create db Table ![SQLScript to create db Tables](./bedushopSQL.sql)

![Pruebas de consultas a la base de datos.](./images/queryUsersTableinHerokuDB.png)

![Pruebas de consultas a la base de datos.](./images/queryCategoriesTable.png)

![Pruebas de consultas a la base de datos.](./images/queryToProductsTablesHerokuDB.png)

![Pruebas de consultas a la base de datos.](./images/queryProductsTableinHerokuDB.png)

## 📑 CHECKLIST S2

Considera que tu proyecto debe cumplir con lo siguiente:
Requisito:  ||  Sí lo cumple    ✅  ||  	No lo cumple    ❌

☐ A. La aplicación debe de tener usuarios, de preferencia que se incluyan diferentes tipos de usuario con privilegios distintos   ✅

☐ B. Se debe considerar que adicionalmente a los usuarios serán necesarias al menos dos entidades (modelos dentro de MVC) más.    ✅	

☐ C. Cada una de las entidades (incluyendo a los usuarios) debe tener características o atributos bien definidos. ✅
