# Sprint 3 - Templates Engines EJS
<a href="https://drive.google.com/file/d/1w-mKpy1qKadxzgiPuxwDgpiMbHBoNR43/view">
<img src="https://i.ibb.co/M6mmYvF/image.png">

Este documento resume la retrospectiva del equipo DronSAR al completar el tercer sprint del proyecto. Se destacan los aspectos positivos a mantener, las áreas que requieren más atención y las nuevas prácticas por implementar. Además, se presentan los entregables del sprint, incluyendo este archivo ```retro.md``` con los resultados de la retrospectiva, ~~el archivo ```daily.md``` opcional con las opiniones sobre las reuniones~~, el tablero de trabajo actualizado en Trello y la aplicación desarrollada con **Node.js+Express+EJS**. La aplicación consta de archivos parciales para modularidad, una página de inicio, listado y detalles de productos, un carrito de compras, formularios de registro y login, así como formularios para carga y edición de productos. Para más detalles sobre las directrices del proyecto, se puede consultar el siguiente [```enlace```](https://drive.google.com/file/d/1w-mKpy1qKadxzgiPuxwDgpiMbHBoNR43/view). 

## Resumen de entregables
- Archivo ```retro.md``` con el resultado de la retrospectiva.
- Archivo ```daily.md``` con sus opiniones sobre las daylies/weeklies. (Opcional)
- Tablero de trabajo actualizado.
- Aplicación Node.js+Express+EJS con:
  - Archivos parciales (head, header, footer, etc.)
  - Home
  - Listado de productos
  - Detalle del producto
  - Carrito de productos
  - Formulario de registro y login
  - Formulario de carga y edición de productos




# 🔄 Retrospectiva estrella de mar

La retrospectiva de estrella de mar del nuestro equipo DronSAR luego de estar finalizando el tercer sprint del proyecto se puede resumir de la siguiente manera:

<img src="https://i.ibb.co/kgN0BYj/image.png"> 

Para más detalles, consultar los siguientes enlaces en [```Retrospectiva estrella de mar - DronsAR - S3.pdf```](https://drive.google.com/file/d/1GgGOfip1HJ21Wn2Mhs7SXFOo76uD9GGT/view?usp=drive_link) [```proyectosagiles.org```](https://proyectosagiles.org/2009/06/14/retrospectiva-estrella-mar-starfish-retrospective-scrum/)


# 🕒 Panel de organización en Trello


A continuacion se ofrece el enlance al Tablero de trabajo, usando la plataforma de [```Trello:```](https://trello.com/b/C13pJ5cq/grupo-6)
<img src="https://i.ibb.co/qrdYmbr/Screenshot-102.jpg">

# 🚀 Aplicación Node.js+Express 

## 📂 Estructura del Proyecto
```bash
.
├── main/
│   ├── desing/
│   │── public/
│   │   ├── CSS/
│   │   │   ├── login.css         # Estilos para la página de inicio de sesión
│   │   │   ├── registro.css      # Estilos para la página de registro
│   │   │   └── styles.css        # Estilos generales de la aplicación
│   │   └── img/
│   │        ├── DRONSAR PROP-10.svg     # Imagen vectorial del logo DRONSAR
│   │        ├── d1.png                   # Imagen de producto
│   │        ├── d2.png                   # Imagen de producto
│   │        ├── d3.png                   # Imagen de producto
│   │        ├── drone2.gif               # Animación de drone
│   │        ├── fondo.jpg                # Imagen de fondo para la aplicación
│   │        ├── fondo2.jpg               # Otra imagen de fondo
│   │        ├── imagen-login.png         # Imagen para la página de inicio de sesión
│   │        └── imagen-principal.png     # Imagen principal de la aplicación
│   └── views/
│       ├── carrito-compra.html    # Página del carrito de compra
│       ├── detalle-producto.html  # Página de detalle de producto
│       ├── index.html            # Página principal de la aplicación
│       ├── login.html            # Página de inicio de sesión
│       └── registro.html         # Página de registro de usuario
├── wireframes/                        # Carpeta para los wireframes del proyecto
├── .gitignore                         # Archivo de configuración para ignorar archivos en Git
├── README.md                          # Archivo con información básica del proyecto
├── Retro.md                           # Archivo para registrar retrospectivas del proyecto
├── app.js                             # Archivo principal de la aplicación (JavaScript)
├── package-lock.json                  # Archivo de bloqueo de versiones de paquetes (npm)
└── package.json                       # Archivo de configuración de paquetes (npm)
```

## 🏠 Home ```(index.html)```

  Este archivo representa la página principal de la aplicación, donde los usuarios llegan inicialmente. Contiene la estructura y el contenido principal que se muestra al cargar la aplicación.

  <a href="https://github.com/chavow5/Grupo_6_DronsAR/blob/main/views/index.html">
  <img src="https://img001.prntscr.com/file/img001/IPUaKk7RRl-1cRTYUl7ixw.jpg" width="700">
  </a>
  

<br> <!-- Salto de línea -->

## 👉 Formulario de registro ```(registro.html)```

  Aquí se encuentra el formulario que los usuarios utilizan para registrarse en la aplicación. Incluye campos y validaciones necesarios para capturar la información de los nuevos usuarios.

<a href="https://github.com/chavow5/Grupo_6_DronsAR/blob/main/views/registro.html" >
<img src="https://img001.prntscr.com/file/img001/VxlYD9xNRc6WByD8jhOv_Q.png" width="400">
</a>
<br> <!-- Salto de línea -->

## 🔐 Formulario de login ```(login.html)```

  Este formulario permite a los usuarios iniciar sesión en la aplicación. Es crucial para la autenticación y seguridad de los usuarios al acceder a sus cuentas personales.

<a href="https://github.com/chavow5/Grupo_6_DronsAR/blob/main/views/login.html" style="display: block; text-align: center;">
  <img src="https://img001.prntscr.com/file/img001/a03TXDPhTFaD-hGDiRUWug.png" width="400">
</a>  

<br> <!-- Salto de línea -->

## 🔍 Detalle del producto ```(detalle-producto.html)```

  La página de detalle del producto muestra información detallada sobre un producto específico. Esto incluye características, precios y opciones de compra, proporcionando una vista profunda para los usuarios interesados en un artículo en particular.

<a href="https://github.com/chavow5/Grupo_6_DronsAR/blob/main/views/detalle-producto.html">
<img src="https://img001.prntscr.com/file/img001/-_2y_NY3RU-KyviikAClJQ.png" width="700">
</a>

<br> <!-- Salto de línea -->

## 🛒 Carrito de compras ```(carrito-compra.html)```

  Aquí se encuentra la interfaz donde los usuarios gestionan los productos seleccionados para la compra. Permite agregar, modificar o eliminar elementos del carrito antes de proceder con la compra final.

  <a href="https://github.com/chavow5/Grupo_6_DronsAR/blob/main/views/carrito-compra.html">
  <img src="https://img001.prntscr.com/file/img001/6yVSObBMR8mcrgjgSxzdGw.png" width="700">
  </a>
