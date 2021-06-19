## **Recipe-api**

## live Demo: http://secret-sands-84459.herokuapp.com/

## Quick Start

```shell
# install deps
npm install

# run in development mode
npm run dev
```

## DB Connection

Add mongoDB credentials in .env file

## Recipes Endpoints

Endpoints for viewing and manipulating Recipes in Postman

- Show Recipe: `GET /api/recipes/`
- Show single Recipe : `GET /api/recipes/:id`
- create Recipe : `POST /api/recipes/`
- update Recipe : `PUT /api/recipes/:id`
- delete Recipe : `DELETE /api/recipes/:id`
  note: id must be integer

NOTE:
At the moment Docker dev doesnot work.
Please use npm to run the server. Once dockerize is done I will update the docs.
