FROM node:lts-alpine
WORKDIR /app/vuejs
COPY package*.json ./
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "serve"]