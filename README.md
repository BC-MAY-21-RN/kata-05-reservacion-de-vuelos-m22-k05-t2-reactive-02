![BrightCoders Logo](img/logo-bc.png)

# Reservación de Vuelos

![Cover](img/cover.jpg)

<span>Photo by <a href="https://unsplash.com/@by_syeoni?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Suhyeon Choi</a> on <a href="https://unsplash.com/s/photos/flight?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

## Pre-requisitos
-  React Native
   - Instalar el entorno de desarrollo [**:warning: utiliza la opción React Native CLI Quickstart NO utilizar Expo**](https://reactnative.dev/docs/environment-setup)
- Editor de texto
  - Elegir un editor para codificar, puede ser [Visual Studio Code](https://code.visualstudio.com/), o algúno similar.
  - Agregar la extensión [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) para mantener un estilo consistente en tu código
  - Instalar [ESLint](https://eslint.org/) para ayudarte a encontrar y arreglar problemas de tu código
  - Agregar la extensión [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) a tu editor para integrar la funcionalidad de Eslint
- Calidad de código. Para analizar la calidad de tu código necesitarás
  - Instalar y configurar [DeepScan](https://deepscan.io/) para analizar tu codigo y mejorar la calidad atendiendo los resultados del análisis
  - Instalar y configurar [CodeClimate](https://codeclimate.com/) para analizar tu codigo y mejorar la calidad atendiendo los resultados del análisis
  
## Requerimientos funcionales
  
La empresa ABC Corp requiere una App para que sus clientes puedan registrar las reservaciones de sus vuelos. 
  
La aplicación deberá:
  
- Permitir a los nuevos usuarios registrarse:
  - El usuario podrá registrarse utilizando nombre, correo y clave ó una cuenta de Google
  - Los datos de registro deben guardarse en firebase
  - El formulario de registro debe contar con validaciones
  - El diseño del formulario debe apegarse al proporcionado
  
- Permitir a los usuarios registrados iniciar sesión:
  - El usuario podrá iniciar sesión utilizando correo y clave o su cuenta de Google, dependiendo de la forma en la que realizó su registro.
  - El inicio de sesión debe realizarse accediendo o verificando los datos almacenados en firebase.
  - El formulario de inicio de sesión debe contar con validaciones
  - El diseño del formulario debe apegarse al proporcionado
  
- Permitir a los usuarios ver las reservaciones de sus vuelos:
  - El usuario podrá ver un listado con la información de sus reservaciones de vuelos
  - La información debe recuperarse desde firebase
  - El diseño del listado debe apegarse al proporcionado
  
- Permitir agregar nuevas reservaciones
  - El usuario deberá indiciar el origen, destino, fecha y número de pasajeros
  - La información debe guardarse en firebase
  - El diseño para la nueva reservación debe apegarse al proporcionado
  
 Algunos de los requerimientos sun un tanto genéricos, es decir no brindan el suficiente detalle, el tratamiento que se debe dar al proyecto es el de un MVP, es decir no es necesario que el funcionamiento o el cumplimiento a los requerimientos sea el más complejo, que cumpla con lo mínimo necesario para que cumpla su función
  
## Requerimientos no-funcionales
 - Base de datos
   - La información se guardará en firebase
 - Calidad
   - Utilizar un estilo de código estandarizado (revisado por Eslint)
   - Incluir pruebas unitarias
   - Puntuación **A** obtenida en CodeClimate
- Ejecución 
   - Puede ejecutarse en Android o iOs
- Diseño
   - Debe ser lo más cercano posible al proporcionado
- Código fuente
   - Orientado a Objetos
   - Métodos pequeños
   - Aplicar los principios [SOLID](https://blog.usejournal.com/how-to-apply-solid-principles-in-react-applications-6c964091a982)
 - Manejo del estado
   - Redux para el manejo del estado de la App
  
## Diseño
En la carpeta [img](/img) de este repositorio se encuentra el diseño solicitado en formato PNG e [InVision](https://www.invisionapp.com/).
  
## Entregable
- Código fuente en Github (en la rama master)
- Incluir en el repositorio la puntuación obtenida (badge) en CodeClimate
- Documentar en [este archivo](setup/README.md) los pasos necesarios para ejecutar la App
- [Los commits deben se significativos](https://medium.com/better-programming/you-need-meaningful-commit-messages-d869e44e98d4)


## Setup
[Aquí se describen los pasos necesarios para ejecutar y probar este proyecto](setup/README.md)

## Recursos
[Para apoyo de tus actividades utiliza esta lista de recursos recomendados](https://brightcoder.gitbook.io/handbook/react-native)
  
