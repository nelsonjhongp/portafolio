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
## Pendiente técnico previo a publicación

La instalación reproducible del lockfile existente (`npm ci`, 22/10/2026) informó
17 avisos de auditoría: 1 bajo, 4 moderados, 11 altos y 1 crítico. Astro 5.18.1 figura
entre las dependencias afectadas. El sitio genera HTML estático; no se debe asumir
que todos los avisos son explotables en GitHub Pages ni descartarlos por ese motivo.
Evaluar las rutas afectadas y una actualización compatible en un cambio separado
antes de publicar. Esta entrega no modifica las versiones ni el lockfile y no
utiliza `npm audit fix --force`.
