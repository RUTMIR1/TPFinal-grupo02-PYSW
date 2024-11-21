# Etapa 1: Construir la aplicación Angular
FROM node:18 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración de npm
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el código fuente de la aplicación
COPY . ./  

# Construir la aplicación Angular para producción
RUN npm run build --prod

# Etapa 2: Servir la aplicación con Apache
FROM nginx:alpine

# Copiar los archivos de la aplicación Angular a la carpeta raíz de nginx
COPY --from=build /app/dist/tp-final-grupo02-galeria-comercial /usr/share/nginx/html/

# Exponer el puerto 80 para servir la aplicación
EXPOSE 80