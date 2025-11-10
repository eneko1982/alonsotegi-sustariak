# Alonsotegi Sustraiak - Memoria Histórica

Bienvenido al proyecto **Alonsotegi Sustraiak**. Esta es una web completa y funcional para preservar y difundir la historia de Alonsotegi.

## 📁 Estructura del Proyecto

```
alonsotegi-sustraiak/
├── index.html              # Página principal
├── cronologia.html         # Línea temporal histórica
├── galeria.html           # Galería fotográfica
├── entonces-ahora.html    # Comparador antes/después
├── articulos.html         # Blog de artículos
├── colabora.html          # Formulario de contacto
├── css/
│   └── styles.css         # Estilos completos (responsive)
├── js/
│   ├── data.js            # 📝 EDITA AQUÍ: Todos tus datos
│   └── main.js            # Funcionalidad JavaScript
├── images/
│   ├── foto1.jpg          # Tus fotos históricas
│   ├── foto2.jpg
│   ├── foto3.jpg
│   ├── foto4.jpg
│   └── foto5.jpg
└── README.md              # Este archivo
```

## 🚀 Cómo Ver la Web Localmente

### Opción 1: Abrir directamente
1. Navega a la carpeta `alonsotegi-sustraiak`
2. Haz doble clic en `index.html`
3. Se abrirá en tu navegador

### Opción 2: Servidor local (recomendado)
```bash
# Si tienes Python instalado:
cd alonsotegi-sustraiak
python -m http.server 8000

# Luego abre en tu navegador:
# http://localhost:8000
```

## ✏️ Cómo Añadir/Editar Contenido

### 📅 Añadir Evento a la Cronología

Abre `js/data.js` y en el array `timelineEvents` añade:

```javascript
{
    year: "1950",
    category: "moderno",  // feudal, industrial, guerra, moderno
    title: "Título del evento",
    description: "Descripción detallada del evento histórico..."
}
```

### 📷 Añadir Fotos a la Galería

1. Copia tu foto a la carpeta `images/`
2. Abre `js/data.js` y en el array `galleryImages` añade:

```javascript
{
    id: 6,  // Siguiente número
    src: "images/tu-foto.jpg",
    title: "Título de la foto",
    description: "Descripción de qué muestra la foto",
    year: "1985",  // o "Actual"
    category: "paisajes"  // paisajes, arquitectura, industria, rio
}
```

### 📖 Añadir Artículo

En `js/data.js`, en el array `articles`:

```javascript
{
    id: 5,  // Siguiente número
    title: "Título de tu artículo",
    category: "historia",  // historia, personajes, arquitectura, industria, cultura
    date: "2025-01-20",
    excerpt: "Resumen breve del artículo...",
    content: "Contenido completo...",
    author: "Proyecto Sustraiak"
}
```

### 🔄 Añadir Comparación Entonces/Ahora

En `js/data.js`, en el array `comparisons`:

```javascript
{
    id: 2,
    location: "Plaza del Ayuntamiento",
    beforeImg: "images/plaza-1960.jpg",
    afterImg: "images/plaza-2025.jpg",
    description: "Evolución de la plaza..."
}
```

## 📤 Publicar en GitHub Pages

### Paso 1: Crear cuenta GitHub
1. Ve a https://github.com
2. Crea una cuenta gratuita si no tienes

### Paso 2: Instalar Git
- **Windows**: https://git-scm.com/download/win
- **Mac**: Ya viene instalado
- **Linux**: `sudo apt install git`

### Paso 3: Subir el Proyecto

```bash
# Abre terminal/cmd en la carpeta del proyecto
cd alonsotegi-sustraiak

# Inicializar Git
git init

# Añadir todos los archivos
git add .

# Primer commit
git commit -m "Primera versión de Alonsotegi Sustraiak"

# Crear repositorio en GitHub (desde la web):
# - Ve a github.com
# - Click en "+" → "New repository"
# - Nombre: alonsotegi-sustraiak
# - Público
# - NO marques "Initialize with README"
# - Crea el repositorio

# Conectar con GitHub (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/alonsotegi-sustraiak.git

# Subir archivos
git branch -M main
git push -u origin main
```

### Paso 4: Activar GitHub Pages

1. En tu repositorio en GitHub
2. Ve a **Settings** (Configuración)
3. Busca **Pages** en el menú lateral
4. En "Source" selecciona **main** branch
5. Click en **Save**
6. Espera 2-3 minutos

Tu web estará en: `https://TU-USUARIO.github.io/alonsotegi-sustraiak`

## 🔄 Actualizar la Web

Después de editar archivos:

```bash
# Ver qué has cambiado
git status

# Añadir cambios
git add .

# Guardar cambios
git commit -m "Descripción de qué has cambiado"

# Subir a GitHub
git push
```

En 1-2 minutos los cambios estarán online.

## 🌐 Usar Dominio Propio

### Opción 1: Subdominio gratuito
Usa tu web con: `alonsotegi-sustraiak.github.io`

### Opción 2: Dominio propio (10€/año)

1. Compra dominio en: Namecheap, GoDaddy, Hostinger
2. En GitHub Pages → Settings → Pages → Custom domain
3. Escribe tu dominio: `alonsotegisustraiak.com`
4. En tu proveedor de dominio, añade DNS:
   - Tipo: CNAME
   - Host: www
   - Valor: TU-USUARIO.github.io

## 📧 Configurar Formulario de Contacto

El formulario ahora solo muestra confirmación. Para que envíe emails:

### Con FormSpree (Gratis)

1. Ve a https://formspree.io
2. Regístrate gratis
3. Crea un formulario
4. En `colabora.html`, en el tag `<form>`, añade:

```html
<form action="https://formspree.io/f/TU-ID" method="POST">
```

## 🎨 Personalizar Colores

En `css/styles.css`, al inicio del archivo, cambia:

```css
:root {
    --primary: #8B4513;        /* Color principal */
    --secondary: #D2691E;      /* Color secundario */
    --accent: #CD853F;         /* Color acento */
}
```

## 💡 Consejos

### Optimizar Fotos
Antes de subir fotos, redúcelas:
- Ancho máximo: 1920px
- Usa herramientas online: tinypng.com, squoosh.app

### Organización
- Una foto = un evento histórico específico
- Nombres descriptivos: `puente-kadagua-1960.jpg`
- Mantén carpetas ordenadas por año o tema

### Backup
- GitHub ES tu backup automático
- Cada `git push` guarda versión
- Puedes volver atrás siempre

## 🐛 Solución de Problemas

**Las fotos no aparecen:**
- Verifica que el nombre en `data.js` coincida exactamente con el archivo
- Distingue mayúsculas/minúsculas

**No se ven los cambios en GitHub Pages:**
- Espera 2-3 minutos después de hacer `git push`
- Refresca con Ctrl+F5 (fuerza recarga)

**Git pregunta usuario/contraseña:**
- Primera vez: configura Git:
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

## 📚 Próximos Pasos

1. **Añade más fotos** → Edita `js/data.js`
2. **Escribe artículos** → Usa tu investigación de 20k palabras
3. **Invita colaboradores** → Comparte la web, recopila material
4. **Netlify CMS** → En el futuro, añadir panel admin visual

## 🆘 Ayuda

Si tienes dudas:
1. Revisa este README
2. Google: "como hacer X en HTML"
3. Me preguntas en la siguiente conversación

---

**¡Tu historia merece ser contada!** 🏔️

Proyecto creado para preservar la memoria histórica de Alonsotegi.
