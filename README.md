# Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for all devices and screen sizes
- **Performance**: Built with Next.js for optimal loading speeds
- **Interactive**: Engaging animations using Framer Motion
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Contact Form**: Functional contact form with validation

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/kishoregantla/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
portfolio/
├── app/                    # Next.js 14 app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact section
│   ├── Hero.tsx           # Hero section
│   ├── Navigation.tsx     # Navigation component
│   ├── Projects.tsx       # Projects showcase
│   └── Skills.tsx         # Skills section
├── public/                # Static assets
└── styles/                # Additional styles
```

## Customization

### Personal Information
Update your personal details in:
- `components/Hero.tsx` - Name, title, description
- `components/About.tsx` - Bio, achievements, stats
- `components/Contact.tsx` - Contact information
- `app/layout.tsx` - Meta tags and SEO data

### Projects
Add your projects in `components/Projects.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    technologies: ['React', 'Node.js', '...'],
    features: ['Feature 1', 'Feature 2', '...'],
    githubUrl: 'https://github.com/username/repo',
    liveUrl: 'https://your-project.com',
    category: 'Full Stack'
  },
  // Add more projects...
]
```

### Skills
Update your skills in `components/Skills.tsx`:
```typescript
const skillCategories = [
  {
    title: 'Frontend Development',
    color: 'from-blue-500 to-purple-600',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      // Add more skills...
    ]
  },
  // Add more categories...
]
```

### Colors and Theme
Customize the color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors
      },
    },
  },
},
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Environment Variables

Create a `.env.local` file for any environment-specific configuration:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
```

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: Automatic optimization with Next.js

## SEO Features

- Meta tags for social sharing
- Open Graph protocol
- Twitter Card support
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt

## Contact

For questions or support, please contact:
- Email: kishoregantla@example.com
- LinkedIn: [linkedin.com/in/kishoregantla](https://linkedin.com/in/kishoregantla)
- GitHub: [github.com/kishoregantla](https://github.com/kishoregantla)

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Kishore Gantla
# kishore_gantla
