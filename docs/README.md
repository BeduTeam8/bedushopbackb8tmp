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

Create and config a data basefor the project. **BeduShop**. 

1. ![Diagrama entidad relación con las entidades del proyecto](./images/ERD-entitiesRelsTablesDiagram.png)

2. Pruebas de Conexión

- ![Conexión mediante PgAdmin4 al servidor de heroku](./images/screenPgadminHerokuDB.png)

- ![Prueba en Docker/Local](./images/screenPgadminDckrDB.png)


3. ![Traducción del modelo relacional que definimos a un esquema de base de datos](./images/dbschema.png)   ❌

4. ![Datasets para poblar las bases de datos.](./images/datasets/entity.csv) Generated, related and loades to folder.    ✅ DB upload  (not yet) ❌

5. ![Pruebas de consultas a la base de datos.](./queries.sql)    ❌

## 📑 CHECKLIST S2

Considera que tu proyecto debe cumplir con lo siguiente:
Requisito:  ||  Sí lo cumple    ✅  ||  	No lo cumple    ❌

☐ A. La aplicación debe de tener usuarios, de preferencia que se incluyan diferentes tipos de usuario con privilegios distintos   ✅

☐ B. Se debe considerar que adicionalmente a los usuarios serán necesarias al menos dos entidades (modelos dentro de MVC) más.    ✅	

☐ C. Cada una de las entidades (incluyendo a los usuarios) debe tener características o atributos bien definidos. ✅
