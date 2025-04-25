


          
# Generador de Perfiles Falsos

## Descripción

Este proyecto es una aplicación web que permite a los usuarios crear perfiles falsos con correos electrónicos temporales verificados para proteger su privacidad en línea. La aplicación genera direcciones de correo electrónico temporales que pueden ser utilizadas para registrarse en sitios web sin comprometer la información personal del usuario.

## Características

- ✉️ Creación de correos electrónicos temporales
- 👤 Generación de perfiles de usuario aleatorios
- 📨 Recepción y visualización de mensajes en tiempo real
- 🔒 Protección de privacidad en línea
- 🗑️ Eliminación de mensajes y cuentas cuando ya no son necesarios
- 📱 Diseño responsivo para dispositivos móviles y de escritorio

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/) - Framework de React para aplicaciones web
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS para diseño rápido
- [API REST](https://email-faker-backend.onrender.com/api) - Backend para la gestión de correos temporales

## Requisitos Previos

- Node.js 18.x o superior
- npm, yarn o pnpm

## Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/fake-profile-generator.git
cd fake-profile-generator
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Uso

1. Al acceder a la aplicación, se generará automáticamente un correo electrónico temporal.
2. Utiliza este correo para registrarte en sitios web o servicios.
3. Los mensajes recibidos aparecerán en la bandeja de entrada de la aplicación.
4. Puedes ver, eliminar o gestionar los mensajes recibidos.
5. Cuando ya no necesites la cuenta, puedes eliminarla completamente.

## Estructura del Proyecto

```
fake-profile-generator/
├── app/                  # Código principal de la aplicación
│   ├── components/       # Componentes reutilizables
│   ├── lib/              # Utilidades y funciones auxiliares
│   ├── services/         # Servicios para interactuar con la API
│   ├── types/            # Definiciones de tipos TypeScript
│   ├── layout.tsx        # Diseño principal de la aplicación
│   └── page.tsx          # Página principal
├── public/               # Archivos estáticos
└── ...                   # Archivos de configuración
```

## Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Añadir una característica increíble'`)
4. Haz push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## Contacto

Si tienes preguntas o sugerencias, no dudes en abrir un issue en este repositorio.

---

Desarrollado con ❤️ para proteger tu privacidad en línea.

        