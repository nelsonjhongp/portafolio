# Portafolio — Nelson Jhon Gil Pari

Portafolio personal con Astro, salida estática y deploy automático a GitHub Pages.

## Stack

- Astro
- TypeScript
- Componentes `.astro`
- CSS custom con design tokens

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run check`

## GitHub Pages

Publicado en `https://nelsonjhongp.github.io/`. El deploy es automático al hacer push a `main`.

Para publicar en subcarpeta (ej. repositorio de proyecto):

```powershell
$env:PUBLIC_BASE_PATH="/portfolio/"; npm run build
```
```
