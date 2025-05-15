# Node.js LTS 
FROM node:18

# working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# instalamos dependências
RUN npm install

# Copiamos la app 
COPY . .

# puerto 8080 de la app
EXPOSE 8080

# environment variables
ENV NODE_ENV=production

# corremos la app
CMD ["npm", "start"]