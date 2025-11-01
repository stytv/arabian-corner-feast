# CODE VIVEKS - Landing Page

A production-ready, fully responsive landing page for CODE VIVEKS, the premier coding club at Swami Vivekananda Institute of Technology (SVIT), Secunderabad.

## 🚀 Features

- **Futuristic Design**: Dark theme with neon blue (#00F0FF) and neon green (#00FF9C) accents
- **Glass Morphism**: Frosted glass panels with subtle neon outlines
- **Smooth Animations**: Fade-in, slide-up, and glow effects for enhanced UX
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Semantic HTML, meta tags, and accessibility features
- **Fast Performance**: Optimized images, lazy loading, and efficient animations

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Type Safety**: TypeScript

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # Vision & Mission
│   ├── Teams.tsx        # Team showcase
│   ├── TeamModal.tsx    # Team details modal
│   ├── Events.tsx       # Events timeline
│   ├── Leadership.tsx   # Org structure
│   ├── Join.tsx         # Application section
│   ├── Projects.tsx     # Project showcase
│   └── Contact.tsx      # Footer with social links
├── data/
│   └── content.ts       # All club data and content
├── assets/              # Images and media
├── pages/
│   └── Index.tsx        # Main landing page
└── index.css            # Design system & global styles
```

## 🎨 Design System

### Color Palette (HSL)
- **Background**: `hsl(230, 40%, 3%)` - Deep space
- **Primary**: `hsl(184, 100%, 50%)` - Neon cyan
- **Secondary**: `hsl(157, 100%, 50%)` - Neon green
- **Foreground**: `hsl(0, 0%, 95%)` - Off-white

### Custom Classes
- `.glass` - Glass morphism with blur
- `.neon-border` - Neon cyan border with glow
- `.text-glow` - Text glow effect
- `.animate-glow-pulse` - Pulsing glow animation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm))

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 📦 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to deploy

**Or use Vercel Dashboard:**
1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Deploy with one click

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

**Or use Netlify Dashboard:**
1. Push code to GitHub
2. Import project in [Netlify Dashboard](https://app.netlify.com/start)
3. Build command: `npm run build`
4. Publish directory: `dist`

## 🔧 Customization

### Update Content

Edit `src/data/content.ts` to update:
- Club information
- Team details
- Event schedules
- Social media links
- Contact information
- Application form link

### Replace Images

1. Replace `src/assets/hero-tech.jpg` with your hero image
2. Add team/project images to `src/assets/`
3. Update image imports in components

### Modify Design

1. **Colors**: Edit HSL values in `src/index.css`
2. **Animations**: Modify keyframes in `tailwind.config.ts`
3. **Components**: Update component files in `src/components/`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML elements (`<header>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Focus indicators on all interactive elements

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags (description, OG, Twitter Card)
- Descriptive alt text on images
- Clean URL structure
- Fast load times with optimized assets

## 📝 Important Links

- **Application Form**: https://forms.gle/hPaXQNf8nhrdas3M8
- **Application Deadline**: Sunday, October 20, 2025, 11:59 PM
- **Contact Email**: codeviveks@svit.ac.in

## 🐛 Troubleshooting

### Build Errors
- Ensure Node.js version is 18+: `node --version`
- Clear node_modules: `rm -rf node_modules && npm install`

### Styling Issues
- Check Tailwind classes are correct
- Verify design system tokens in `index.css`

### Image Not Loading
- Ensure images are in `src/assets/`
- Check import paths are correct
- Use ES6 imports: `import image from "@/assets/image.jpg"`

## 📄 License

© 2025 CODE VIVEKS. All rights reserved.

## 🤝 Contributing

This is a club project. For contributions or suggestions, contact the Web Development Team at codeviveks@svit.ac.in

---

Built with ❤️ by CODE VIVEKS Web Development Team
