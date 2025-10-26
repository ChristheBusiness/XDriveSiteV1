# XDriveSite — local dev & deploy notes

This repository contains a full-stack site (client + Express server). It was developed in Replit and uses Drizzle for migrations. The project stores contact messages in an in-memory storage when run locally, so you can run and test the app without a database.

## Quick local run (Windows PowerShell)
1. Open PowerShell and change into the inner project folder:

```powershell
cd C:\Users\Cristian\Desktop\XDriveSite\XDriveSite
```

2. Install dependencies (if you haven't already):

```powershell
npm install
```

3. Start the dev server:

```powershell
npm run dev
```

Notes:
- `cross-env` is used in the `dev` and `start` scripts so environment variables work cross-platform.
- The server uses an in-memory storage (`server/storage.ts`) by default, so no database is required to run and test the frontend or the contact endpoints.

## Running without Supabase (temporary / local)
- You don't need to set `DATABASE_URL` to run the dev server. Drizzle's `drizzle.config.ts` will throw if you run Drizzle CLI commands that require the database (for example `npm run db:push`) without `DATABASE_URL`.
- If you later want to run migrations locally, set `DATABASE_URL` to a local Postgres (or a Supabase connection string) in your environment before running Drizzle commands.

## Adding a real database (Supabase)
1. Create a Supabase project and copy the Postgres connection string.
2. Add the connection string to your hosting environment variables (as `DATABASE_URL`).

If you plan to run the server on a hosted Node provider (Render, Railway, Fly, Vercel Serverless, etc.), add `DATABASE_URL` to that provider's environment variables. If you prefer Supabase Edge Functions you may need to port the Express routes to edge functions (different runtime).

## Deploy plan (recommended)
1. Push the repository to GitHub.
2. Frontend: Deploy the `client/` folder to Netlify
   - In Netlify, create a new site from Git -> GitHub and pick this repo.
   - Set the build command to `npm run build` and the publish directory to `client/dist` or `client/dist` depending on your Vite config (Netlify will build from the repo root; you can specify a subdirectory if needed).
   - Set any required environment variables for the frontend in Netlify (usually none).
3. Backend & Database:
   - Database: create a Supabase project and configure your tables (you can use `drizzle-kit push` with `DATABASE_URL` set to Supabase to apply migrations).
   - Backend server: deploy the Node/Express server to a Node host (Render, Fly, Railway, or Vercel Serverless). Add `DATABASE_URL` as an env var for that host.

Alternative: Convert the backend into Supabase Edge Functions (and use Supabase Postgres). This requires reworking the Express server into edge handlers.

## Useful commands
- Install deps: `npm install`
- Dev server (hot reload): `npm run dev`
- Build frontend: `npm run build` (this runs Vite and any server build steps in the root `package.json`)
- Run database migrations (only after `DATABASE_URL` is set): `npm run db:push`

## Troubleshooting
- ENOENT / package.json not found: make sure you are in `XDriveSite/XDriveSite` (inner folder) when running `npm`.
- `'NODE_ENV' is not recognized`: `cross-env` is used so scripts are cross-platform; ensure `node_modules` are installed.
- Drizzle CLI errors about `DATABASE_URL`: set `DATABASE_URL` before running `db:push`.

## Next steps I can help with
- Update `.replit` so Replit runs the inner project automatically.
- Add GitHub repo and configure Netlify deploy settings.
- Convert Express routes into Supabase Edge Functions (if you want a single Supabase-first deployment).

If you want, tell me which of the next steps above to do and I'll implement it.
