# Backend3 - Proyecto AdoptMe

Este repositorio contiene la implementación del backend para el proyecto AdoptMe, una aplicación basada en Node.js para la gestión de usuarios, mascotas y adopciones. El proyecto utiliza Express.js, MongoDB y Mongoose para su funcionalidad backend.

## Funcionalidades

- **Gestión de Usuarios**: Crear, actualizar, eliminar y obtener usuarios.
- **Gestión de Mascotas**: Agregar, actualizar, eliminar y obtener mascotas, incluyendo soporte para subir imágenes.
- **Gestión de Adopciones**: Administrar adopciones vinculando usuarios y mascotas.
- **Generación de Datos Mock**: Generar usuarios y mascotas ficticias para propósitos de prueba.

## Cambios Clave

1. **Nuevo Endpoint `/generateData`**:
   - Se agregó el endpoint `POST /api/mocks/generateData` en [`mocks.router.js`](src/routes/mocks.router.js).
   - Este endpoint acepta parámetros numéricos `users` y `pets` para generar e insertar datos ficticios en la base de datos.

2. **Utilidades para Datos Mock**:
   - Se actualizó [`mocking.module.js`](src/utils/mocking.module.js) para generar usuarios ficticios con contraseñas encriptadas y roles aleatorios.

3. **Integración con Base de Datos**:
   - Se integró MongoDB con modelos de Mongoose para `Users`, `Pets` y `Adoptions`.
   - Se añadieron repositorios para abstraer las operaciones con la base de datos.

4. **Subida de Imágenes**:
   - Se añadió soporte para subir imágenes de mascotas utilizando `multer` en el endpoint `/api/pets/withimage`.

5. **Autenticación**:
   - Se implementó el registro y login de usuarios con contraseñas encriptadas y autenticación basada en JWT.

## Estructura del Proyecto
src/    ├── src/app.js # Punto de entrada principal de la aplicación 
        ├── controllers/ # Controladores para manejar la lógica de las API 
        ├── dao/ # Objetos de Acceso a Datos para operaciones con la base de datos 
        ├── dto/ # Objetos de Transferencia de Datos para estructurar datos 
        ├── public/ # Recursos públicos (e.g., imágenes subidas) 
        ├── repository/ # Repositorios para abstraer la lógica de la base de datos 
        ├── routes/ # Rutas de las API 
        ├── services/ # Capa de servicios para la lógica de negocio 
        └── utils/ # Funciones utilitarias (e.g., generación de datos mock, subida de archivos)


Aquí tienes el archivo `README.md` en español:

```markdown
# Backend3 - Proyecto AdoptMe

Este repositorio contiene la implementación del backend para el proyecto AdoptMe, una aplicación basada en Node.js para la gestión de usuarios, mascotas y adopciones. El proyecto utiliza Express.js, MongoDB y Mongoose para su funcionalidad backend.

## Funcionalidades

- **Gestión de Usuarios**: Crear, actualizar, eliminar y obtener usuarios.
- **Gestión de Mascotas**: Agregar, actualizar, eliminar y obtener mascotas, incluyendo soporte para subir imágenes.
- **Gestión de Adopciones**: Administrar adopciones vinculando usuarios y mascotas.
- **Generación de Datos Mock**: Generar usuarios y mascotas ficticias para propósitos de prueba.

## Cambios Clave

1. **Nuevo Endpoint `/generateData`**:
   - Se agregó el endpoint `POST /api/mocks/generateData` en [`mocks.router.js`](src/routes/mocks.router.js).
   - Este endpoint acepta parámetros numéricos `users` y `pets` para generar e insertar datos ficticios en la base de datos.

2. **Utilidades para Datos Mock**:
   - Se actualizó [`mocking.module.js`](src/utils/mocking.module.js) para generar usuarios ficticios con contraseñas encriptadas y roles aleatorios.

3. **Integración con Base de Datos**:
   - Se integró MongoDB con modelos de Mongoose para `Users`, `Pets` y `Adoptions`.
   - Se añadieron repositorios para abstraer las operaciones con la base de datos.

4. **Subida de Imágenes**:
   - Se añadió soporte para subir imágenes de mascotas utilizando `multer` en el endpoint `/api/pets/withimage`.

5. **Autenticación**:
   - Se implementó el registro y login de usuarios con contraseñas encriptadas y autenticación basada en JWT.

## Estructura del Proyecto

```
src/
├── [`src/app.js`](src/app.js )                 # Punto de entrada principal de la aplicación
├── controllers/           # Controladores para manejar la lógica de las API
├── dao/                   # Objetos de Acceso a Datos para operaciones con la base de datos
├── dto/                   # Objetos de Transferencia de Datos para estructurar datos
├── public/                # Recursos públicos (e.g., imágenes subidas)
├── repository/            # Repositorios para abstraer la lógica de la base de datos
├── routes/                # Rutas de las API
├── services/              # Capa de servicios para la lógica de negocio
└── utils/                 # Funciones utilitarias (e.g., generación de datos mock, subida de archivos)
```

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/CodernameJT/backend3-1entrega.git
   cd backend3-1entrega
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   - Crea un archivo `.env` en el directorio raíz.
   - Agrega tu cadena de conexión de MongoDB y otras variables necesarias.

4. Inicia la aplicación:
   - Para producción:
     ```bash
     npm start
     ```
   - Para desarrollo:
     ```bash
     npm run dev
     ```

## Endpoints de la API

### Usuarios
- `GET /api/users`: Obtener todos los usuarios.
- `GET /api/users/:uid`: Obtener un usuario específico por ID.
- `PUT /api/users/:uid`: Actualizar un usuario por ID.
- `DELETE /api/users/:uid`: Eliminar un usuario por ID.

### Mascotas
- `GET /api/pets`: Obtener todas las mascotas.
- `POST /api/pets`: Agregar una nueva mascota.
- `POST /api/pets/withimage`: Agregar una nueva mascota con imagen.
- `PUT /api/pets/:pid`: Actualizar una mascota por ID.
- `DELETE /api/pets/:pid`: Eliminar una mascota por ID.

### Adopciones
- `GET /api/adoptions`: Obtener todas las adopciones.
- `GET /api/adoptions/:aid`: Obtener una adopción específica por ID.
- `POST /api/adoptions/:uid/:pid`: Crear una nueva adopción.

### Datos Mock
- `POST /api/mocks/generateData`: Generar e insertar usuarios y mascotas ficticias.

## Dependencias

- **Express**: Framework web para Node.js.
- **Mongoose**: Herramienta de modelado de objetos para MongoDB.
- **bcrypt**: Encriptación de contraseñas.
- **jsonwebtoken**: Autenticación basada en JWT.
- **multer**: Manejo de subida de archivos.

## Licencia

Este proyecto está licenciado bajo la Licencia ISC.
```

---

### **Pasos Finales**
1. Guarda este archivo como `README.md` en el directorio raíz de tu proyecto.
2. Súbelo al repositorio:
   ```bash
   git add README.md
   git commit -m "Agregado README.md en español"
   git push
   ```

¡Listo! Tu proyecto ahora tendrá un archivo `README.md` en español en el repositorio.---

### **Pasos Finales**
1. Guarda este archivo como `README.md` en el directorio raíz de tu proyecto.
2. Súbelo al repositorio:
   ```bash
   git add README.md
   git commit -m "Agregado README.md en español"
   git push
   ```

¡Listo! Tu proyecto ahora tendrá un archivo `README.md` en español en el repositorio.
