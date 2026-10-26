# Nelson Jhon Gil Pari

Portafolio personal construido con Astro, TypeScript y CSS.

[Ver portafolio](https://nelsonjhongp.github.io/portafolio/) ·
[Caso RIPNEL](https://nelsonjhongp.github.io/portafolio/proyectos/ripnel/)

## Desarrollo

Requiere Node.js 24.

```sh
npm ci
npm run dev
```

## Verificación y preview

Con la misma base utilizada en GitHub Pages, desde PowerShell:

```powershell
$env:PUBLIC_BASE_PATH='/portafolio/'
npm run check
npm run build
npm run check:dist
npm run preview -- --host 127.0.0.1 --port 4321
```

## Estructura

- `src/components/`: componentes de la interfaz.
- `src/content/`: perfil, proyectos y tecnologías.
- `src/styles/`: temas y estilos compartidos.
- `src/assets/`: imágenes procesadas por Astro.
- `public/`: recursos servidos directamente.
- `scripts/`: validaciones del sitio generado.
- `.github/workflows/`: comprobación y publicación.

## RIPNEL

El caso presenta mi aporte y decisiones en un proyecto propio.
El ERP tiene repositorio privado y no ofrece acceso público.

Las capturas usan datos sintéticos y conservan sus imágenes completas.
Ver [procedencia y límites](src/assets/projects/ripnel/README.md).

## Publicación

Los PR ejecutan comprobaciones sin publicar. Los pushes a `main`
publican automáticamente en GitHub Pages cuando el build pasa.

## Recursos y mantenimiento

Source Sans 3, temas claro y oscuro y SVG locales.
Los iconos de Docker y GitHub Actions proceden de
[Simple Icons](https://github.com/simple-icons/simple-icons/tree/90646e4bf7f3b89df6c37e65baf3e7bc759a517c/icons)
y conservan su [licencia CC0-1.0](public/icons/tech/simple-icons-LICENSE.txt).

La evidencia de revisión y actualización de dependencias está en el
[PR #3](https://github.com/nelsonjhongp/portafolio/pull/3).
Pendiente: comprobar manualmente el zoom real al 200 %.
