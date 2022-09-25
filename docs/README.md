Here you will find all the planning design and scope documentation for this development sesion.

 
- Proj Objs
- Phases & Time Planning
- Architecture & Tools definition, Tooling


[`Backend Fundamentals`](../../README.md) > [`Sesión 01`](../README.md) > `Postwork`

# Postwork S1 

## 🎯 Objetivo

- Explorar y describir las herramientas que se utilizarán en el proyecto. 
- Definir la Arquitectura y requerimientos del proyecto personal.

## ⚙️ Setup
 - Trello

### Trello

Para que todo el mundo tenga claro lo que hay que hacer, haz clic en las tarjetas y añade más información, como, por ejemplo:
- Descripciones
- Fechas de vencimiento
- Miembros
- Checklists
- Adjuntos
- Comentarios
 
## 📑 Deliverables

1. Los objetivos generales del proyecto están pensados desde un punto de vista de un cliente que le solicita a un equipo de desarrollo la implementación del proyecto, es decir, objetivos no técnicos.

![Scope](./trello-scope.png)

![Requirements](./trello-requirements.png)

2. Definir en un tablero en Trello la planificación temporal del proyecto, basándose en la vista en el work. Pues el proceso de desarrollo será muy similar. Agregar un screenshot del tablero al documento. Utilizar también todo el conocimiento nuevo de trello de la sección anterior si es posible. Hay que considerar que la fecha de presentación del proyecto final será en la sesión de Checkpoint 

- https://trello.com/b/SyEmy5H6/planificacion-backend

- ![trello Project](./trello-projPlan.png)

3. Diagrama de herramientas a utilizar. Mencionar qué son y para qué sirven:

- https://app.terrastruct.com/diagrams/2137997413/edit#path=Overview


- PstgreSQL
- JavaScript
- Node.js
- npm
- Sequelize
- Express.js
- Github
- Heroku

![Terrastruct-Diagrama](./terrastruct-architecture.png)

4. 6 historias de usuario que definan las funcionalidades de estos dentro de la aplicación. Y explicar por qué son importantes estas funcionalidades.

![6 User Sotries](./trello-userStories.png)

5. Identificación de los modelos del proyecto, cada uno con sus características específicas, dentro de una arquitectura modelo vista controlador. 

![Identificación de los modelos del proyecto para MVC](./models-def.png)

---
===

[`Backend Fundamentals`](../../README.md) > [`Sesión 02`](../README.md) > `Postwork`

# Postwork S2

## 🎯 Objetivo

- Crear una base de datos con tablas y registros.

## ⚙️ Setup
 - PosgreSQL

## 📑 Deliverables S2

Create and config a data basefor the project. **BeduShop**. 

1. ![Diagrama entidad relación con las entidades del proyecto](./ERD-entitiesRelsTablesDiagram.png)

2. Pruebas de Conexión

- ![Conexión mediante PgAdmin4 al servidor de heroku](./screenPgadminHerokuDB.png)

- ![Prueba en Docker/Local](./screenPgadminDckrDB.png)


3. ![Traducción del modelo relacional que definimos a un esquema de base de datos](./dbschema.png)   ❌

4. ![Datasets para poblar las bases de datos.](./datasets/entity.csv)   ❌

5. ![Pruebas de consultas a la base de datos.](./queries.sql)    ❌

---
===

## 📑 CHECKLISTs

Considera que tu proyecto debe cumplir con lo siguiente:
Requisito:  ||  Sí lo cumple    ✅  ||  	No lo cumple    ❌

## 📑 CHECKLIST S1

☐ A. Tener una base de datos 		  ✅ 

☐ B. La base de datos debe tener al menos 3 tablas. 	 ❌	

☐ C. Cada tabla debe tener al menos 50 registros (en caso de ser posible). 	 ❌

## 📑 CHECKLIST S2

☐ A. La aplicación debe de tener usuarios, de preferencia que se incluyan diferentes tipos de usuario con privilegios distintos   ✅

☐ B. Se debe considerar que adicionalmente a los usuarios serán necesarias al menos dos entidades (modelos dentro de MVC) más.    ✅	

☐ C. Cada una de las entidades (incluyendo a los usuarios) debe tener características o atributos bien definidos. ✅
