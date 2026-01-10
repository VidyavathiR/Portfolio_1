# Vidyavathi R - Portfolio Website

A modern, professional portfolio website for a junior web developer built with React, Vite, and Tailwind CSS. This fully responsive website showcases projects, skills, experience, and education in a clean and accessible design.

## Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Accessible**: Proper semantic HTML and ARIA labels
- **SEO-Friendly**: Optimized meta tags and structure
- **Easy Navigation**: Sticky navbar with smooth scroll navigation
- **Mobile Menu**: Hamburger menu for mobile devices

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky navigation with mobile menu
│   │   ├── Hero.tsx          # Hero section with intro
│   │   ├── About.tsx         # About me section
│   │   ├── Skills.tsx        # Technical skills showcase
│   │   ├── Projects.tsx      # Featured projects
│   │   ├── Experience.tsx    # Work experience
│   │   ├── Education.tsx     # Educational background
│   │   ├── Contact.tsx       # Contact information
│   │   └── Footer.tsx        # Footer with social links
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # App entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
├── netlify.toml              # Netlify deployment config
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (or download the project)

```bash
git clone <repository-url>
cd project
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update name, role, and tagline
   - Update GitHub and LinkedIn URLs

2. **Projects** (`src/components/Projects.tsx`):
   - Add/edit project details
   - Update GitHub and demo links

3. **Experience** (`src/components/Experience.tsx`):
   - Update work experience details
   - Add new positions as needed

4. **Education** (`src/components/Education.tsx`):
   - Update educational qualifications

5. **Contact** (`src/components/Contact.tsx`):
   - Update email address
   - Update social media links

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles in each component file

## Deployment

### Deploy to Netlify

#### Method 1: Using Netlify CLI

1. **Install Netlify CLI**

```bash
npm install -g netlify-cli
```

2. **Build the project**

```bash
npm run build
```

3. **Deploy to Netlify**

```bash
netlify deploy --prod
```

Follow the prompts to connect your site.

#### Method 2: Using Netlify Dashboard

1. **Build the project**

```bash
npm run build
```

2. **Go to [Netlify](https://www.netlify.com/)**

3. **Drag and drop** the `dist` folder to Netlify

#### Method 3: Continuous Deployment (Recommended)

1. **Push your code to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Connect to Netlify**:
   - Go to [Netlify](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will automatically detect the build settings from `netlify.toml`
   - Click "Deploy site"

3. **Automatic Deployments**:
   - Every push to the main branch will trigger a new deployment
   - Preview deployments for pull requests

### Deploy to Vercel

1. **Install Vercel CLI**

```bash
npm install -g vercel
```

2. **Deploy**

```bash
vercel
```

Or use the Vercel dashboard to import from GitHub.

## Performance Optimization

The project is optimized for production:

- Code splitting with Vite
- Optimized asset loading
- Minified CSS and JavaScript
- Fast page load times
- Responsive images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML5
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Responsive font sizes

## SEO Features

- Proper meta tags
- Open Graph tags for social sharing
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## Contact

- **Email**: vidyavathi.r@example.com
- **GitHub**: [github.com/vidyavathi](https://github.com/vidyavathi)
- **LinkedIn**: [linkedin.com/in/vidyavathi-r](https://linkedin.com/in/vidyavathi-r)

## License

This project is open source and available for personal use.

---

**Built with React, Vite, and Tailwind CSS** | © 2026 Vidyavathi R
