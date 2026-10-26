# Nelson Jhon Gil Pari

Portafolio personal con Astro y GitHub Pages.

## Stack

Astro, TypeScript, CSS.

## Uso

```
npm install
npm run dev
npm run build
```

## Deploy

Automático vía GitHub Actions al pushear a `main`.
## Caso RIPNEL

La página `/portafolio/proyectos/ripnel/` presenta RIPNEL como proyecto propio de
desarrollo de software: problema, aporte personal, recorridos, arquitectura,
decisiones y verificación. No es una landing comercial ni ofrece acceso al ERP.
Los datos compartidos con la portada viven en `src/content/ripnel.ts`. Las capturas
originales están en `src/assets/projects/ripnel/`; Astro genera WebP responsivos al compilar.
Ver procedencia y límites en [la nota de assets](src/assets/projects/ripnel/README.md).

Para revisar con la misma base que GitHub Pages (PowerShell):

```powershell
npm ci
$env:PUBLIC_BASE_PATH='/portafolio/'
npm run check
npm run build
npm run check:dist
npm run preview -- --host 127.0.0.1 --port 4321
```

Los PR ejecutan tipos, build y validación de rutas/assets. No publican.
El workflow conserva publicación automática para pushes a `main` y ejecución manual
sobre `main`; integrar un PR sí publicará, por lo que requiere revisión previa.
`check:dist` requiere un build con base `/portafolio/` y no comprueba destinos externos.

La galería es manual, con puntos y deslizamiento móvil. Las tarjetas usan un marco
16:10 con recorte superior; el caso dedicado conserva las imágenes completas.
Sus recorridos se agrupan en desplegables nativos (venta, existencias y sesión),
con el primero abierto inicialmente. También funcionan sin JavaScript.
El contenido y los enlaces de las capturas funcionan sin JS;
con JS se habilitan tema, menú móvil y ampliación en dialog. No hay acceso de DEMO
público ni se exponen credenciales del ERP. La web de la marca, ripnel.com, es
independiente. Una futura DEMO mínima queda por definir y no se confunde con el
entorno temporal de capacitación existente.

La presentación y los textos de disponibilidad se mantienen en `src/content/profile.ts`.
Contacto se concentra en la portada; el caso termina con enlaces a Contacto, CV y proyectos.
`ActionLink` comparte presentación de botón o texto e iconos direccionales; `TechChip`
comparte las insignias de tecnologías entre portada, tarjetas y caso.

El visor nativo del caso ajusta el panel a la captura, con una sola fila de controles
accesibles. Mantiene navegación circular, teclado, Escape y retorno del foco; informa
carga/error y descarta cargas anteriores al cambiar de selección. «Abrir imagen completa»
abre el WebP completo en otra pestaña; no es un zoom ni una descarga del PNG original.
El índice conserva las anclas y señala la sección activa con `aria-current`.

Los SVG locales de Docker y GitHub Actions proceden de [Simple Icons](https://github.com/simple-icons/simple-icons/tree/90646e4bf7f3b89df6c37e65baf3e7bc759a517c/icons),
referencia `90646e4bf7f3b89df6c37e65baf3e7bc759a517c`. Se conserva su licencia CC0-1.0
en `public/icons/tech/simple-icons-LICENSE.txt`; identifican las tecnologías utilizadas.
## Pendiente técnico previo a publicación

La instalación reproducible del lockfile existente (`npm ci`, 22/10/2026) informó
17 avisos de auditoría: 1 bajo, 4 moderados, 11 altos y 1 crítico. Astro 5.18.1 figura
entre las dependencias afectadas. El sitio genera HTML estático; no se debe asumir
que todos los avisos son explotables en GitHub Pages ni descartarlos por ese motivo.
Evaluar las rutas afectadas y una actualización compatible en un cambio separado
antes de publicar. Esta entrega no modifica las versiones ni el lockfile y no
utiliza `npm audit fix --force`.
