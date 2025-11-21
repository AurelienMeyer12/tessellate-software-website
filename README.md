# Tessellate Software Website

A modern, responsive website for Tessellate Software built with [Astro](https://astro.build/).

## About

Tessellate Software is an enduring home for ultra-niche, mission-critical VMS (Vertical Market Software) businesses. This website showcases the company's offerings, strategic alliance with Bit Complete, team members, and contact information.

## Features

- 🚀 Built with Astro for fast, modern web experiences
- 📱 Fully responsive design
- ♿ Accessible components and semantic HTML
- 🎨 Modern UI with smooth animations
- 👥 Team member profiles with modal interactions
- 📧 Contact form integration

## Tech Stack

- **Framework**: Astro ^4.15.0
- **Language**: TypeScript
- **Styling**: CSS
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

To create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
11zon/
├── public/          # Static assets (images, favicon, etc.)
├── src/
│   ├── components/  # Astro components
│   ├── data/        # TypeScript data files
│   ├── layouts/     # Page layouts
│   ├── pages/       # Route pages
│   ├── scripts/     # Client-side JavaScript
│   └── styles/      # Global CSS styles
├── astro.config.mjs # Astro configuration
└── package.json     # Dependencies and scripts
```

## Deployment

This project is configured for deployment on Vercel through GitHub integration. Simply push to the main branch and Vercel will automatically build and deploy.

## License

Copyright © 2024 Tessellate Software

