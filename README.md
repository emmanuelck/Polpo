# Polpo

[![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Responsive Design](https://img.shields.io/badge/Responsive-Mobile%20First-0066CC?style=for-the-badge)](https://en.wikipedia.org/wiki/Responsive_web_design)
[![Status](https://img.shields.io/badge/Status-En%20Desarrollo-blue?style=for-the-badge)](https://github.com/emmanuelck/polpo)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

Sitio web corporativo de Polpo, una solución integral de servicios y productos para diversas industrias.

## Descripción

Este proyecto es una plataforma web moderna que presenta los productos y servicios de la empresa, casos de éxito, información sobre la organización y canales de contacto. El sitio está desarrollado con tecnologías web estándar (HTML5, CSS3 y JavaScript) con un diseño responsivo que se adapta a todos los dispositivos.

## Características

- **Página de inicio**: Presentación principal con información destacada de la empresa
- **Productos y Servicios**: Catálogo completo de las soluciones ofrecidas
- **Industrias**: Sectores a los que está dirigida la solución
- **Casos de Éxito**: Proyectos y resultados destacados
- **Acerca de Nosotros**: Información corporativa de Polpo
- **Actualidad**: Blog o noticias relacionadas con la empresa
- **Contacto**: Formulario de contacto para consultas

## Estructura del Proyecto

```
polpo/
├── index.html                          # Página de inicio
├── productos-servicios.html            # Página de productos y servicios
├── industrias.html                     # Página de industrias
├── casos-de-exito.html                 # Página de casos de éxito
├── nosotros.html                       # Página de información corporativa
├── actualidad.html                     # Página de actualidad/noticias
├── contacto.html                       # Página de contacto
├── detalle.html                        # Página de detalle de casos
├── css/
│   └── styles.css                      # Estilos principales
├── js/
│   └── scripts.js                      # Funcionalidad JavaScript
├── images/                             # Imágenes del sitio
├── assets/
│   └── video/                          # Videos incluidos
└── README.md                           # Este archivo
```

## Tecnologías Utilizadas


- **HTML5**: Estructura semántica del sitio
- **CSS3**: Estilos y diseño responsivo
- **JavaScript**: Interactividad y funcionalidad del cliente
- **Bootstrap 5.3**: Framework CSS para diseño responsive
- **Font Awesome 7.0**: Iconografía
- **Google Fonts**: Tipografías personalizadas (Poppins, Lora, Quicksand, Varela Round)

## Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web para servir los archivos estáticos (opcional para desarrollo local)

## Instalación y Uso

### Opción 1: Abrir directamente
Simplemente abre cualquiera de los archivos `.html` en tu navegador web.

### Opción 2: Con servidor local
Para una experiencia de desarrollo mejorada, usa un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js (si tienes http-server instalado)
http-server
```

Luego accede a `http://localhost:8000` en tu navegador.

## Desarrollo

### Estructura de Estilos
Los estilos se encuentran centralizados en `css/styles.css`. El diseño es responsivo y utiliza variables CSS para facilitar el mantenimiento.

### Funcionalidad JavaScript
El archivo `js/scripts.js` contiene toda la lógica del lado del cliente necesaria para la interactividad del sitio.

### Tipografías
- **Poppins**: Tipografía principal para cuerpo de texto
- **Lora**: Tipografía serif para títulos alternativos
- **Quicksand**: Tipografía complementaria
- **Varela Round**: Tipografía decorativa

## Navegación

El sitio cuenta con navegación principal fija en la parte superior con:
- Logo de Polpo
- Menú responsivo (hamburguesa en dispositivos móviles)
- Enlaces a todas las secciones principales
- Acceso a contacto

## Soporte

Para reportar problemas o sugerencias, contacta a través del formulario de contacto en el sitio.

---

**Última actualización**: Octubre 2025
