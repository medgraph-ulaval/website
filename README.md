# website

T3 Stack app (Next.js, tRPC, Prisma, Tailwind) with Supabase Postgres and Vercel deploy.

## Stack

- **Next.js 15** (App Router)
- **tRPC** + Prisma for API / DB
- **Supabase** as managed Postgres
- **Vercel** for hosting

## Local setup

```bash
npm install
cp .env.example .env
# fill in DATABASE_URL and DIRECT_URL (see below)
npx prisma generate

# Only necessary to push schemas to Supabase
npm run db:push

npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Use |
|----------|-----|
| `DATABASE_URL` | App runtime (Supabase **transaction pooler**, port `6543`) |
| `DIRECT_URL` | Migrations / `db push` (Supabase **session pooler**, port `5432`) |

Example `.env`:

```bash
# Transaction pooler — used by the running app (Prisma Client)
DATABASE_URL="postgresql://postgres.[ref]:[PASSWORD]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true"

# Session pooler — used by prisma db push / migrate
DIRECT_URL="postgresql://postgres.[ref]:[PASSWORD]@aws-0-[region].pooler.supabase.com:5432/postgres"
```

Copy strings from Supabase → **Connect** → **ORM** → **Prisma**.

### Important

- Always include `?pgbouncer=true` on `DATABASE_URL`. Without it you get:
  `prepared statement "sN" already exists` (Postgres `42P05`).
- Prefer the **session pooler** for `DIRECT_URL` if the direct `db.*.supabase.co:5432` host is unreachable (common without IPv6).
- URL-encode special characters in the password.

`prisma/schema.prisma` must include:

```prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```

## Database commands

```bash
npm run db:push      # sync schema (dev / early stage)
npm run db:studio    # browse data
npm run db:migrate   # prisma migrate deploy (production-style)
```

### `db:push` vs migrations

- **Now / solo / prototyping:** use `npm run db:push` locally. No GitHub Action needed.
- **Production / team:** switch to migrations:
  1. Locally: `npx prisma migrate dev --name describe_change`
  2. Deploy: `npx prisma migrate deploy` (CI or manually before/after release)

Do **not** automate `db:push` in CI. If you add a workflow later, run `prisma migrate deploy` with `DATABASE_URL` / `DIRECT_URL` as GitHub secrets.

## Deploy (Vercel + Supabase)

1. Create a Supabase project and apply schema (`npm run db:push` or migrate).
2. Push this repo to GitHub.
3. Import the project on [Vercel](https://vercel.com).
4. Set env vars on Vercel:
   - `DATABASE_URL` — pooled URL with `?pgbouncer=true`
   - `DIRECT_URL` — session pooler URL
5. Deploy.

`postinstall` already runs `prisma generate`, so the Prisma client is built on Vercel.

Flow:

```
Browser → Vercel (Next.js + tRPC) → Prisma → Supabase Postgres
```

## Common errors

| Error | Fix |
|-------|-----|
| `P1001: Can't reach database server` | Project paused, or use session pooler for `DIRECT_URL` instead of `db.*.supabase.co:5432` |
| `prepared statement already exists` (`42P05`) | Add `?pgbouncer=true` to `DATABASE_URL`, restart `npm run dev` |
| Build fails on missing env | Set `DATABASE_URL` (and `DIRECT_URL`) in Vercel env vars |

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` / `npm start` | Production build & serve |
| `npm run check` | Lint + typecheck |
| `npm run db:push` | Push schema to DB |
| `npm run db:studio` | Prisma Studio |

## Docs

- [T3 / Vercel deploy](https://create.t3.gg/en/deployment/vercel)
- [Prisma + Supabase](https://supabase.com/docs/guides/database/prisma)
