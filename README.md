# Nejigiku Portfolio

Portfolio personal reconstruido con Astro y salida estatica para GitHub Pages.

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

El proyecto asume publicacion final en `https://nelsonjhongp.github.io/`.

Si temporalmente necesitas publicarlo como proyecto, puedes ajustar la base con:

```bash
PUBLIC_BASE_PATH=/nejigiku/ npm run build
```

En PowerShell:

```powershell
$env:PUBLIC_BASE_PATH="/nejigiku/"; npm run build
```
