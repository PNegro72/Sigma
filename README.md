# Sigma.AI Landing Page

Landing page estatica para una consultora independiente de servicios de Inteligencia Artificial orientada a PYMEs.

## Requisitos

- Node.js 18 o superior.
- npm.

No usa backend ni dependencias externas.

## Desarrollo local

```bash
npm install
npm run dev
```

Luego abrir la URL que muestra la terminal, normalmente:

```text
http://localhost:5173
```

## Build estatico

```bash
npm run build
```

El sitio final queda generado en la carpeta `dist/`.

## Subir a Hostinger

1. Ejecutar `npm run build`.
2. Entrar al administrador de archivos o FTP de Hostinger.
3. Subir todo el contenido de `dist/` dentro de `public_html`.
4. Verificar que `index.html` quede directamente dentro de `public_html`, no dentro de una subcarpeta.

## Contacto

Los CTAs usan:

- Calendly placeholder: `https://calendly.com/sigma-ai/consulta-inicial`
- Email placeholder: `contacto@sigma-ai.com`
- LinkedIn placeholder: `https://www.linkedin.com/company/sigma-ai`

Actualizar esos enlaces en `src/index.html` cuando esten disponibles los datos definitivos.
