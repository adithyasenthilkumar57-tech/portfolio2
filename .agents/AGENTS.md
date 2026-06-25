# Project Customization Rules

## Static Asset Imports for Public Images
- All images placed in the `public/` directory MUST be statically imported at the top of the JS/JSX files using JavaScript `import` statements (e.g. `import aboutHeroImg from '../../public/assets/about_hero.png';`).
- NEVER reference public images using absolute string paths directly (e.g. `<Image src="/assets/about_hero.png" />`).
- Pass the imported image object directly to Next.js's `<Image>` component `src` attribute (e.g. `<Image src={aboutHeroImg} ... />`).
- This ensures that dimensions are computed correctly at build time, and that Next.js automatically prefix static files with `basePath` when exporting to GitHub Pages, avoiding 404 path issues.
