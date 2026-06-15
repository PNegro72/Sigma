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

## Subir a DonWeb

1. Ejecutar `npm run build`.
2. Entrar al administrador de archivos o FTP de DonWeb.
3. Subir todo el contenido de `dist/` dentro de `public_html`.
4. Verificar que `index.html` quede directamente dentro de `public_html`, no dentro de una subcarpeta.
5. Confirmar que el dominio `sigmadotai.com.ar` apunte al hosting contratado.

## Contacto

Los CTAs usan:

- Agenda Google Calendar: `https://calendar.app.google/18vao9H7G4bLwZdC7`
- Email: `contacto@sigmadotai.com.ar`
- LinkedIn placeholder: `https://www.linkedin.com/company/sigma-ai`

Actualizar esos enlaces en `src/index.html` cuando esten disponibles los datos definitivos.
