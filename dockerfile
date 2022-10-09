FROM node:14

WORKDIR /React-test-wings

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5173 \
    api_url=https://jsonplaceholder.typicode.com/posts

EXPOSE 5173