# Mini Oglasnik API

Simple API built with Express + TypeScript + SQLite.

## Available endpoints

- GET /ads
- GET /ads/:id
- POST /ads
- PUT /ads/:id
- DELETE /ads/:id
- GET /health

## Scripts

- `npm run dev` - start dev server
- `npm run test` - run tests
- `npm run migrate` - run db migrations
- `npm run seed` - seed db

## Running

```bash
npm install
npm run migrate
npm run seed
npm run dev
```

Then open [http://localhost:3000/ads](http://localhost:3000/ads)
