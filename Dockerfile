FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci --legacy-deps

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev" ]