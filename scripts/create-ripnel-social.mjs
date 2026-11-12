// Genera una imagen social usando únicamente la captura sintética del caso.
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';

const screenshot = await readFile(new URL('../src/assets/projects/ripnel/pos.png', import.meta.url));
const data = screenshot.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><clipPath id="screen"><rect x="508" y="85" width="647" height="449" rx="12"/></clipPath></defs>
<rect width="1200" height="630" fill="#1c2431"/>
<rect x="0" y="0" width="12" height="630" fill="#b39be3"/>
<text x="62" y="105" fill="#c4cddd" font-family="Arial, sans-serif" font-size="18" letter-spacing="3">CASO DE DESARROLLO</text>
<rect x="62" y="132" width="58" height="4" rx="2" fill="#b39be3"/>
<text x="60" y="242" fill="#ffffff" font-family="Arial, sans-serif" font-size="61" font-weight="700">RIPNEL</text>
<text x="62" y="303" fill="#d8c9f2" font-family="Arial, sans-serif" font-size="42" font-weight="700">Platform</text>
<text x="62" y="371" fill="#c4cddd" font-family="Arial, sans-serif" font-size="23">Ventas · inventario · caja</text>
<text x="62" y="566" fill="#aeb8ca" font-family="Arial, sans-serif" font-size="18">Nelson Jhon Gil Pari</text>
<rect x="500" y="77" width="663" height="465" rx="18" fill="#39465a"/>
<image x="508" y="85" width="647" height="449" preserveAspectRatio="xMidYMid meet" href="data:image/png;base64,${data}" clip-path="url(#screen)"/>
<text x="516" y="573" fill="#aeb8ca" font-family="Arial, sans-serif" font-size="17">Vista del sistema con datos sintéticos</text>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og/ripnel-caso.png', import.meta.url).pathname.replace(/^\/(\w:)/, '$1'));
