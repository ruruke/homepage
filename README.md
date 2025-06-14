# お菓子食べませんか？ (Would you like some sweets?)

A personal website built with Vue 3, TypeScript, and Vuetify.

## Features

- Modern Vue 3 Composition API with `<script setup>`
- TypeScript for type safety
- Vuetify 3 for Material Design components
- Vite for fast development and building
- Responsive design
- Animations and transitions
- Route-based code splitting
- ESLint for code quality

## Project Structure

```
/
├── public/              # Static assets that will be served as-is
├── src/
│   ├── assets/          # Images and other assets that will be processed by Vite
│   ├── components/      # Reusable Vue components
│   │   ├── Footer.vue   # Site footer component
│   │   └── Header.vue   # Site header with navigation
│   ├── router/          # Vue Router configuration
│   ├── views/           # Page components
│   │   ├── About.vue    # Home/About page
│   │   └── Contact.vue  # Contact form page
│   ├── App.vue          # Root component
│   ├── main.ts          # Application entry point
│   └── style.css        # Global styles
├── index.html           # HTML template
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
# or
pnpm dev
```

### Build

```bash
# Build for production
npm run build
# or
pnpm build
```

### Preview

```bash
# Preview production build
npm run preview
# or
pnpm preview
```

## Docker

The project includes Docker configuration for easy deployment:

```bash
# Build and run with Docker Compose
docker-compose up -d
```

## License

This project is for personal use only.

## Author

- ruru
