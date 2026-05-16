# Reference Finder (Frontend)

Reference Finder is a Next.js web app that analyzes study notes and suggests relevant YouTube videos. Users can paste text or upload a file, then review extracted keywords, search queries, and recommended videos. The current API route returns mock data to demonstrate the end-to-end flow. It is also possible to link with the appropriate backend: https://github.com/Bert0ns/yt-reference-finder-backend

## Features

- Landing page with product overview, use cases, and FAQ
- Reference Finder flow with form input, loading state, and results tabs
- Mock API that simulates keyword extraction and video matching
- Tailwind CSS styling with Radix UI components

## Pages

- `/` - Marketing landing page
- `/reference-finder` - Main tool UI

## API (Mock)

`POST /api/process`

- Accepts `multipart/form-data` with `text` and/or `file`
- Returns `keywords`, `queries`, and `videos` in a `ProcessResponse` object
- Uses mock data and simulated latency to mirror a real pipeline

## Tech Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Radix UI

## Configuration

Site metadata lives in `website.config.ts` and is used by the header and SEO metadata. Update the title, description, or menu items there.

## Development

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Notes on the Mock Pipeline

The API route currently returns static sample keywords, queries, and videos. To connect a real backend, insert the url of the backend server in the .env file

## Deployment

Build the app and run the production server:

```bash
npm run build
npm run start
```
