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

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copiar los archivos generados de la aplicación Angular a la carpeta raíz de Nginx
COPY --from=build /app/dist/tp-final-grupo02-galeria-comercial/browser/ /usr/share/nginx/html/

# Copiar la configuración personalizada de Nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto 80 para servir la aplicación
EXPOSE 80