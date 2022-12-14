[`Backend Fundamentals`](../../README.md) > [`Sesi贸n 03`](../README.md) > `Postwork`

# Postwork S3

## 馃幆 Objetivo

- Conectar la base de datos del proyecto personal con la aplicaci贸n.

## 鈿欙笍 Setup
- Node.Js
- npm
- Express
- Body-Parser
- Cors
- Nodemon
- Sequelize
- pg
- pg-hstore
- pg-native

## 馃搼 Deliverables S3

En este momento ya se debe contar con un modelo del proyecto y una base de datos con la informaci贸n que se usar谩 en la construcci贸n del mismo a lo largo del m贸dulo. 

A continuaci贸n, construye la aplicaci贸n y con茅ctala con la base de datos. 

1. Genera un esqueleto del proyecto similar al que se utilizar谩 para BeduShop. Debe verse as铆: 鉁?

```
    Nombre del proyecto/
    鈹溾攢鈹? config/
    鈹溾攢鈹? models/
    鈹溾攢鈹? controllers/
    鈹溾攢鈹? routes/
    鈹斺攢鈹? app.js
```

2. Instala dentro del proyecto todas las dependencias y paquetes necesarios para que funcione correctamente. Puedes consultar la actividad dos del prework de esta sesi贸n para recordar c贸mo instalar cada una. La lista completa de dependencias se ve a continuaci贸n : 鉁?
- Express
- Body-Parser
- Cors
- Nodemon
- Sequelize
- pg
- pg-hstore
- pg-native

3. Utilizando las credenciales de Heroku para la base de datos de tu proyecto, define en el archivo app.js la conexi贸n de tu app con la base de datos.  鉁?

![dbConnect with Sequelize](./images/dbConnect.png)

4. Prueba la conexi贸n con tu base haciendo las consultas que definiste en el postwork de la sesi贸n 2 a trav茅s de sequelize.    鉁?

Insomnia testing Creating UserType
![Insomnia testing Creating UserType](./images/InsertnewUserType.png)
Insomnia testing Select From -FindAll UserType
![Insomnia testing Select From -FindAll UserType](./images/SelectAllFromUserType.png)

## 馃搼 CHECKLIST S3

Considera que tu proyecto debe cumplir con lo siguiente:
Requisito:  ||  S铆 lo cumple    鉁? ||  	No lo cumple  鉂?

鈽? A. Tener la estructura completa del proyecto hasta el momento,  鉁?  junto con la base de datos.   鉁? 

鈽? B. Dependencias y paquetes instalados.   鉁?		

鈽? C. Definir la conexi贸n a la base de datos, usando sequelize.   鉁? 

鈽? D. Definir consultas usando los m茅todos de Sequelize. 		 鉁?
