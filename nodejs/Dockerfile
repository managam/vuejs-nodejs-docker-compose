FROM node:lts-alpine
WORKDIR /app/nodejs
COPY package*.json ./
RUN npm install
EXPOSE 3080
CMD ["npm", "run", "dev"]