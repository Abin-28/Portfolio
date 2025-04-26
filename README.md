# Abin Skaria - Portfolio

A modern, responsive portfolio website built with React, Vite, Framer Motion, and Tailwind CSS.

## Features

- Smooth animations and transitions using Framer Motion
- Responsive design with Tailwind CSS
- Interactive project cards
- Animated skill showcases
- Contact information with clickable links
- Modern and clean UI design
- PDF viewer integration
- GitHub Pages deployment
- ESLint configuration for code quality
- Vite for fast development and optimized builds

## Technologies Used

- React.js 19
- Vite 6.3
- Framer Motion 12.9
- Tailwind CSS 3.4
- React Icons 5.5
- React Router DOM 7.5
- React PDF 7.7
- ESLint 9.23
- PostCSS 8.5

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies using pnpm:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm test` - Run tests
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm deploy` - Deploy to GitHub Pages (runs build first)

## Build and Deploy

To build the app for production:

```bash
pnpm build
```

This will create an optimized production build in the `dist` folder.

To deploy to GitHub Pages:

```bash
pnpm deploy
```

This command will build the project and deploy it to the GitHub Pages branch specified in your repository settings.

## Project Structure

- `src/` - Source code
  - `components/` - React components
  - `App.jsx` - Main application component
  - `App.css` - Global styles
  - `index.jsx` - Application entry point
- `public/` - Static assets
  - PDF files
  - Images
  - SVG files
- `dist/` - Production build output
- Configuration files:
  - `vite.config.js` - Vite configuration
  - `eslint.config.js` - ESLint configuration
  - `tailwind.config.js` - Tailwind CSS configuration
  - `postcss.config.js` - PostCSS configuration

## Customization

- Edit the content in the component files to update your information
- Modify the color scheme in `tailwind.config.js`
- Adjust animations in individual components using Framer Motion
- Update ESLint rules in `eslint.config.js`
- Configure build settings in `vite.config.js`

