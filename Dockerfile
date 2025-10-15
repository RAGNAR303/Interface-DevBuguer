#Etapa 1: build
FROM node:20-alpine AS build

WORKDIR /app
#Instala dependencias
COPY package*.json ./ 
RUN npm install

#Copia o restante do projeto
COPY . .
#Build da aplicação
EXPOSE 3003 

#Etapa 2: servidor
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

#Expor a porta que Easypanel vai usar

EXPOSE 5173

CMD [ "nginx", "-g", "daemon off;" ]