import type { Project } from "../types/portfolio";
import { asset } from "../utils/assets";
import pos from "../assets/projects/ripnel/pos.png";
import products from "../assets/projects/ripnel/products.png";
import inventory from "../assets/projects/ripnel/inventory.png";
import transfers from "../assets/projects/ripnel/transfers.png";
import cash from "../assets/projects/ripnel/cash.png";
import home from "../assets/projects/ripnel/home.png";
import mobile from "../assets/projects/ripnel/mobile.png";

export const ripnelScreens = [
  { src: pos, label: "Venta en mostrador", alt: "Punto de venta de RIPNEL con catálogo y carrito de una sesión sintética.", caption: "Una venta reúne productos, variantes y cantidades en un mismo recorrido. El backend valida las reglas de la operación." },
  { src: products, label: "Productos y variantes", alt: "Catálogo de productos sintéticos de RIPNEL con sus opciones de consulta.", caption: "La información de productos se organiza para consultar variantes y precios sin perder el contexto operativo." },
  { src: inventory, label: "Inventario por ubicación", alt: "Vista de inventario de RIPNEL con existencias sintéticas por ubicación.", caption: "El stock pertenece a una ubicación. Su consulta y los movimientos comparten las reglas del backend." },
  { src: transfers, label: "Transferencias internas", alt: "Solicitud de transferencia entre dos sedes sintéticas de RIPNEL con una variante y cinco unidades.", caption: "Las transferencias separan solicitud, despacho y recepción para seguir el movimiento entre ubicaciones." },
  { src: cash, label: "Caja", alt: "Vista operativa de caja de RIPNEL en una sesión de prueba local.", caption: "Caja tiene un ciclo propio de apertura, operaciones y cierre. Las acciones disponibles dependen de la sesión y sus permisos." },
  { src: home, label: "Inicio de una sesión", alt: "Inicio del ERP RIPNEL con accesos operativos para un usuario sintético.", caption: "La sesión y los permisos determinan los accesos. La interfaz orienta al usuario hacia las tareas disponibles." }
] satisfies Array<{ src: typeof pos; label: string; alt: string; caption: string }>;

export const ripnelMobile = { src: mobile, label: "Inicio en móvil", alt: "Inicio operativo de RIPNEL a 390 píxeles con accesos rápidos y estado de caja sintéticos." };

export const ripnelProject: Project = {
  id: "ripnel-platform",
  name: "RIPNEL Platform",
  eyebrow: "Aplicación web",
  summary: "ERP textil para gestionar inventario, ventas, caja y transferencias entre ubicaciones.",
  problem: "Coordinar productos, stock y ventas entre ubicaciones sin perder las reglas de cada operación.",
  solution: "Un ERP con interfaz operativa, API con autorización y transacciones, y releases separados por destino.",
  responsibilities: ["Requerimientos y diseño de flujos", "Frontend y API", "Modelo relacional y transacciones", "Pruebas, CI y preparación de releases"],
  stack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "PostgreSQL", "GitHub Actions", "Docker"],
  cardStack: ["Next.js", "TypeScript", "Express", "PostgreSQL"],
  image: pos,
  screens: ripnelScreens,
  caseStudyHref: asset("proyectos/ripnel/"),
  privateCode: true,
  status: "ERP desarrollado",
  featured: true,
  links: []
};
