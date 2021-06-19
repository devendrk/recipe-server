#Dockerfile
# PROD CONFIG
FROM node as prod

RUN npm install create-react-app -g

RUN npm install -g npm@latest

RUN npm install webpack@4.44.2 -g

RUN npm install ts-node -g

WORKDIR /app1

COPY package*.json ./

COPY tsconfig.json ./

RUN npm install

WORKDIR /app1/client

COPY ./client/package.json ./

RUN npm install

RUN npm install react-scripts@4.0.3 -g

COPY . ./

ENV SKIP_PREFLIGHT_CHECK=true

RUN npm run build

WORKDIR /app1

COPY . .

RUN npm run build

COPY ./dist .

ENV NODE_ENV=production

CMD [ "npm", "start" ]