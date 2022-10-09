[`Backend Fundamentals`](../../README.md) > [`Sesión 07`](../README.md) > `Postwork`

# Postwork S7

## 🎯 Objetivo

- Agregar sesiones a la API.
- Controlar el acceso a los servicios e información mediante privilegios de usuario.

## ⚙️ Setup

- Passport.js

## 📑 DEliverables S7

1. Definir la configuración de Passport para tu proyecto. Puedes usar una muy similar a la vista en el work para BeduShop.   ❌  passport se convirtio en opcional 

    ![config/passport.js](../config/passport.js)

    FOTO de Codigo de Miguel lleva la mano en Auth-Routes.

2. Controlar el acceso a los servicios de tu API para que solo los usuarios autorizados puedan acceder a ellos. Para esto considera:  

 - Definir un conjunto de servicios públicos y uno de servicios privados.  ✅ 

   
 - Definir un control de acceso a información o filtros de control sobre la información que regresa el servicio según el nivel del usuario que lo consulta.   ✅ 
 
      ![Listado de Excel con soluciones en rutas y servicios asigados por userTypes](/DisenoAPIBedushop.xlsx)


 - Definir un organigrama con privilegios bien definidos para cada tipo de usuario.    ✅ 
    HACER DIAGRAMA BASADO EN XLSX

3. Cambiar las rutas de los servicios que sean necesarios para modelar este control de acceso.    ✅ 

ESPERAR a MIGUEL PARA CAMBIAR STATUS
## 📑 CHECKLIST S7

Considera que tu proyecto debe cumplir con lo siguiente:
Requisito: || Sí lo cumple ✅ || No lo cumple ❌

☐ A. Configuración de Passport ❌

☐ B. Definir claramente qué tipo de acceso tiene cada servicio. 	✅     

☐ C. Implementar el control de acceso mediante las rutas de los servicios. 		✅     