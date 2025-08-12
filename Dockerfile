FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm ci --legacy-deps

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev" ]