# Capturas de RIPNEL

- Fuente: RIPNEL Platform, commit `4019c10abd52bb692ed19bfdef685bb4d5fdf381`.
- Capturadas el 22 de octubre de 2026 con build real, API real y PostgreSQL 17 descartable.
- Provisioning, migraciones y fixtures sintéticos existentes de RIPNEL, base local `ripnel_test`.
- Rol vendedor de los fixtures. Sin datos de clientes, credenciales, entornos remotos o producción.
- Se abrió caja con un fondo sintético local. La venta y la solicitud de transferencia
  son borradores de UI; no se confirmaron operaciones comerciales.
- Desktop: 1440×1000. Móvil: 390×844. Los PNG conservan la captura original.
- Astro genera versiones WebP de 480/960/1440 y vista completa; los originales no se copian a `public`.
- `pos`, `products`, `inventory`, `transfers`, `cash`, `home` y `mobile` corresponden a
  venta, catálogo, existencias, solicitud de transferencia, caja e inicio (desktop/móvil).

La vista social `public/og/ripnel-og.png` es una composición editorial de código
con la captura de POS y el título «RIPNEL Platform», identificado como proyecto
propio de desarrollo de software. No se generó ni alteró la UI con IA.
El caso conserva las siete imágenes completas y su ampliación. Catálogo y caja,
inventario y solicitud de transferencia, e inicio desktop/móvil se agrupan en
recorridos desplegables; el punto de venta permanece visible en la cabecera.
La figura móvil se presenta hasta 280 px, con una sola leyenda «Vista móvil»;
sus medidas originales siguen siendo 390×844. El visor mantiene el WebP completo
y ajusta el panel a cada proporción. `sizes` distingue cabecera, columna y móvil.
La cabecera presenta información y POS en dos columnas desde 1024 px; por debajo
se apilan. Las capturas del cuerpo se ajustan a la columna de lectura. `placement`
selecciona el contexto responsivo y `eager` controla únicamente carga y prioridad.
La nota de datos sintéticos y venta en borrador permanece junto al POS.
El ajuste visual del 26/10/2026 reutiliza estos archivos; no vuelve a ejecutar el
ERP ni acredita nuevas pruebas de sus flujos.
Estas imágenes acreditan vistas del sistema, no adopción, facturación ni una
certificación de todos sus flujos. Revisar la vigencia del contenido antes de publicar.
