#  Don Pepe – Proyecto Frontend

Este es un proyecto web desarrollado con:

- React
- TypeScript
- Vite
- TailwindCSS

---

# ¿Qué necesito antes de empezar?

Solo necesitas tener instalado:

# Node.js  
Descárgalo desde:  
 https://nodejs.org/

Después de instalarlo, verifica en tu terminal:

```bash
node -v 20.20.0
npm -v 11.7.0

# Cómo ejecutar el proyecto
git clone https://github.com/MiguelAlturo/landing-page-react.git

# Instalar dependencias
npm install

# Iniciar el proyecto
npm run dev

# Después abre tu navegador en
http://localhost:5173

# Crear versión para producción
npm run build

# Estructura del proyecto
src/
│
├── components/
│   ├── header/
│   ├── heroBanner/
│   ├── mediaContentSection/
│   ├── productCarousel/
│   ├── gridImages/
│   └── footer/
│
├── App.tsx
├── main.tsx
└── App.css

# Componentes principales
El proyecto está compuesto por:
Header → Barra de navegación superior
HeroBanner → Banner principal
MediaContentSection → Sección con imagen y texto (puede invertirse)
ProductCarousel → Carrusel de productos dinámico
GridImages → Grilla de imágenes
Footer → Información institucional y enlaces

# Problemas comunes
# Error: "Cannot find module" usa:
rm -rf node_modules
npm install

#AUTOR
Miguel Angel Caballero García
Proyecto personal de práctica y desarrollo con React.
---

Este README:
- Refleja tu estructura real
- Explica cómo correrlo
- Explica qué hace cada componente
- Está listo para GitHub
- Es claro para alguien que no sabe React