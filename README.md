# AgentLedger

> Behavioral ledger for AI agents: decisions, actions, and policy events — recorded and anchored for audit-ready proof.

## What it does

AgentLedger is a **Next.js** product shell with a marketing site, **dashboard**, **agents**, public **alerts** and **leaderboard**, and **demo** wallet/session flows (Solana + EVM via WalletConnect). Mock data illustrates UX; replace with your backend when you ship.

## Tech stack

- **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**
- **Wagmi v2**, **viem**, **RainbowKit**
- **Solana** wallet adapters + **@solana/web3.js**
- **Recharts** (dashboard chart)

## Prerequisites

- **Node.js 20.x** (recommended; 18.17+ generally works)
- **npm** (lockfile included)

## Getting started

```bash
cd agent-ledger
npm ci
cp .env.example .env.local
# Set at least NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID for real WalletConnect
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000) (dev script binds to `127.0.0.1:3000`).

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Dev server (Turbopack) |
| `npm run dev:clean` | Clean `.next` + dev |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint |
| `npm test` | Vitest |

## Environment variables

See **[.env.example](./.env.example)**. Minimum for a good prod experience:

- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` — from [WalletConnect Cloud](https://cloud.walletconnect.com)
- `NEXT_PUBLIC_APP_URL` — canonical URL (Vercel: your production domain)

Optional: Solana RPC URL/network, Solscan base URL, IPFS gateway (defaults suit devnet demo).

## Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for Vercel and CI.

Health check: `GET /api/health` or `GET /health` (rewrite).

## Project structure

```
agent-ledger/
├── app/                 # App Router (marketing, dashboard, agents, APIs)
├── components/          # UI + feature components
├── lib/                 # env, auth helpers, mock data, utilities
├── public/              # static assets, robots.txt, sitemap.xml
└── tests/               # Vitest (API + middleware QA)
```

## License

MIT
