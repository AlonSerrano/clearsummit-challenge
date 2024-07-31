# Establece la imagen base
FROM node:14

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila el código TypeScript
RUN npm run build

# Expone el puerto de la aplicación
EXPOSE 3000

# Define el comando para iniciar la aplicación
CMD ["npm", "run", "start"]
