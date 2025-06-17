# 🍽️ Proyecto Restaurant con PocketBase

Este proyecto utiliza PocketBase como backend para gestionar la base de datos y la autenticación.

## 📋 Requisitos Previos

- PocketBase (versión más reciente)
- Navegador web moderno
- Node.js (para el frontend)

## 💻 Instalación de PocketBase

### 🪟 Windows
1. Descarga la última versión de PocketBase para Windows desde [pocketbase.io](https://pocketbase.io/docs/)
2. Extrae el archivo `pocketbase.exe` en la raíz del proyecto
3. Ejecuta `./pocketbase.exe serve` para iniciar el servidor
4. El servidor estará disponible en `http://127.0.0.1:8090`

### 🐧 Linux
1. Descarga la última versión de PocketBase para Linux desde [pocketbase.io](https://pocketbase.io/docs/)
2. Extrae el archivo en la raíz del proyecto
3. Dale permisos de ejecución:
   ```bash
   chmod +x pocketbase
   ```
4. Ejecuta el servidor:
   ```bash
   ./pocketbase serve
   ```
5. El servidor estará disponible en `http://127.0.0.1:8090`

### 🍎 macOS
1. Descarga la última versión de PocketBase para macOS desde [pocketbase.io](https://pocketbase.io/docs/)
2. Extrae el archivo en la raíz del proyecto
3. Dale permisos de ejecución:
   ```bash
   chmod +x pocketbase
   ```
4. Ejecuta el servidor:
   ```bash
   ./pocketbase serve
   ```
5. El servidor estará disponible en `http://127.0.0.1:8090`

## 🚀 Inicialización del Proyecto

1. Clona este repositorio:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd restaurant
   ```

2. Inicia PocketBase siguiendo las instrucciones según tu sistema operativo

3. Accede al panel de administración:
   - Abre `http://127.0.0.1:8090/_/` en tu navegador
   - Crea una cuenta de administrador en el primer inicio

4. Configura las colecciones necesarias en el panel de administración

5. Para el frontend:
   ```bash
   npm install
   npm run dev
   ```

## 📁 Estructura del Proyecto

- `pb_data/`: Directorio donde PocketBase almacena los datos (ignorado por git)
- `pocketbase.exe` o `pocketbase`: Ejecutable de PocketBase (ignorado por git)
- `src/`: Código fuente del frontend
- `public/`: Archivos estáticos

## ⚠️ Notas Importantes

- No subir al repositorio los archivos `pb_data/` y el ejecutable de PocketBase
- Mantener una copia de seguridad de la base de datos
- El servidor PocketBase debe estar en ejecución para que la aplicación funcione correctamente

## 👑 Crear Super Admin desde Consola

Para crear un super admin desde la consola, sigue estos pasos:

1. Detén el servidor PocketBase si está en ejecución

2. Ejecuta el siguiente comando según tu sistema operativo:

   **Windows:**
   ```bash
   pocketbase.exe superuser create admin@ejemplo.com tu_contraseña
   ```

   **Linux/macOS:**
   ```bash
   ./pocketbase superuser create admin@ejemplo.com tu_contraseña
   ```

3. Reemplaza `admin@ejemplo.com` con el correo electrónico que desees usar
4. Reemplaza `tu_contraseña` con la contraseña que desees establecer

5. Reinicia el servidor PocketBase

6. Ahora puedes iniciar sesión en el panel de administración (`http://127.0.0.1:8090/_/`) con las credenciales que acabas de crear

**🔒 Nota:** Asegúrate de usar una contraseña segura y guardarla en un lugar seguro.

## 📚 Soporte

Para más información sobre PocketBase, consulta la [documentación oficial](https://pocketbase.io/docs/).
