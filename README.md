# Nelson Jhon Gil Pari

Portafolio personal con Astro y GitHub Pages.

## Stack

Astro 7.4.2, TypeScript 5.9.3 y CSS. Desarrollo y CI usan Node.js 24.

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
desarrollo de software: recorridos, implementación, arquitectura y verificación.
La cabecera resume el aporte personal y muestra el punto de venta completo.
No es una landing comercial ni ofrece acceso al ERP.
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
público ni se exponen credenciales del ERP. La web pública ripnel.com, de prendas,
tiendas y catálogos, es independiente. Una futura DEMO mínima queda por definir y no se confunde con el
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

## Criterios visuales y de lectura

La fuente es Source Sans 3, con temas claro y oscuro definidos en
`src/styles/tokens.css`. La escala compartida usa 16 px para cuerpo y tarjetas,
18 px para lectura del caso, 14 px para leyendas e insignias y 12 px para categorías
y estados. Los títulos de tarjeta usan 20 px; los de sección, 32–40 px en escritorio
y 28–32 px en móvil. El nombre de portada conserva su composición de presentación.
El interlineado del cuerpo es 1,65. Los controles afectados tienen áreas de 44 px.
Los espacios siguen la escala 4/8/12/16/24/32/48/64/80 px y los radios compartidos
son 8 px para controles, 16 px para paneles y 999 px para píldoras.
La capa sobre la fotografía protege el contraste del texto. En tema claro, la
navegación conserva fondo oscuro para mantener legibles sus enlaces e iconos.
Las tecnologías principales no tienen borde ni elevación al pasar el cursor;
capacidades, idiomas y tecnologías complementarias conservan el borde de agrupación.
Formación y los detalles de Metrion/Transcriber comparten el radio de panel de 16 px
y etiquetas de 12 px. Sus detalles usan cuerpo de 16 px y cierres de 44 × 44 px.
«Ver caso» solo se muestra cuando se ha registrado el control del diálogo con JS;
sin JS permanecen las tarjetas y los enlaces a los repositorios públicos.

El contenedor general llega a 1120 px con al menos 16 px laterales. A partir de
1024 px, la cabecera del caso distribuye información y captura en dos columnas;
por debajo se apilan, sin imponer una altura de pantalla. El cuerpo combina índice
y una columna de lectura de hasta 72ch. Los párrafos ocupan esa columna completa.
`CaseScreen` distingue `placement` (cabecera o cuerpo), figura móvil y prioridad
`eager`; la prioridad no decide el tamaño de presentación.

La portada mantiene las cinco tecnologías principales, capacidades e idiomas a
la vista. Las tecnologías complementarias están en un desplegable nativo cerrado.
Las categorías indican el tipo de aplicación y los estados de tarjeta indican
«Código privado» o «Código público». El estado del ERP se explica dentro del caso.
Las decisiones del caso describen requisito, implementación y comprobaciones
existentes en el repositorio de RIPNEL; no equivalen a ejecutar esas pruebas en
esta revisión del portafolio.

Revisión local del 26/10/2026: portada y caso en 390, 768, 1075 y 1366 px, ambos temas;
reflujo a 320 px y espaciado de texto ampliado; galerías, visor, teclado, anclas,
recuperación de imágenes y navegación sin JavaScript. El zoom real del navegador
al 200 % queda pendiente: el control de Windows se detuvo al no poder verificar
la URL de la ventana de prueba. La emulación de ancho no se presenta como esa prueba.

Los SVG locales de Docker y GitHub Actions proceden de [Simple Icons](https://github.com/simple-icons/simple-icons/tree/90646e4bf7f3b89df6c37e65baf3e7bc759a517c/icons),
referencia `90646e4bf7f3b89df6c37e65baf3e7bc759a517c`. Se conserva su licencia CC0-1.0
en `public/icons/tech/simple-icons-LICENSE.txt`; identifican las tecnologías utilizadas.
## Dependencias y compatibilidad

La instalación del 22/10/2026 con Astro 5.18.1 informó 17 avisos. La revisión del
lockfile del 26/10/2026 informó 19 (1 bajo, 4 moderados, 13 altos y 1 crítico).
Se resolvieron en un cambio separado mediante versiones elegidas explícitamente:
Astro 7.4.2 y `@astrojs/check` 0.9.12, conservando TypeScript 5.9.3. La instalación
limpia con `npm ci` y la auditoría del nuevo lockfile informaron cero vulnerabilidades
el 26/10/2026. Ese resultado corresponde a la base de avisos de esa fecha.

Se contrastaron las guías oficiales de [Astro 6](https://docs.astro.build/en/guides/upgrade-to/v6/)
y [Astro 7](https://docs.astro.build/en/guides/upgrade-to/v7/): el sitio no usa adaptador
SSR, colecciones con esquemas, plugins Vite, MDX ni API internas. `compressHTML: true`
conserva el tratamiento anterior de espacios entre elementos. Se regeneran y revisan
las imágenes responsivas, además de la navegación y los estilos del build estático.
No se ejecutó un actualizador automático de versiones mayores ni `npm audit fix`.

El [aviso crítico de AVIF](https://github.com/withastro/astro/security/advisories/GHSA-26w7-cxv4-gfx2)
afecta al procesamiento de imágenes AVIF no confiables. El portafolio usa imágenes
locales controladas y publica archivos estáticos, sin endpoint de optimización ni
carga de archivos del visitante. Eso limita esa vía de exposición; la corrección se
incorpora igualmente actualizando la herramienta de build y su servicio de imágenes.
