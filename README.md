# Personal Portfolio Website

A modern, minimalist portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring a sleek black and white design.

## Features

- **Modern Stack**: Built with Next.js 16, TypeScript, and Tailwind CSS v4
- **Black & White Theme**: Clean, minimalist design focused on content
- **Responsive Design**: Works seamlessly on all devices
- **Portfolio Sections**:
  - Hero/Landing page
  - About section with skills showcase
  - Projects showcase
  - Contact information
  - Dedicated Powerlifting page with stats and progress tracking

## Getting Started

### Development Server

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Customization

1. **Personal Information**: Update `app/page.tsx` with your:
   - Name
   - Title/Role
   - Bio/Description
   - Skills
   - Projects
   - Contact information

2. **Metadata**: Edit `app/layout.tsx` to update:
   - Site title
   - Description

3. **Powerlifting Stats**: Modify `app/powerlifting/page.tsx` to add your:
   - Current lift numbers
   - Goals
   - PR history
   - Training philosophy

## Project Structure

```
├── app/
│   ├── components/
│   │   └── Navigation.tsx    # Navigation bar
│   ├── powerlifting/
│   │   └── page.tsx          # Powerlifting page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── public/                   # Static assets
└── package.json
```

## Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build
4. Click "Deploy"

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Technologies

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel (recommended)

## License

MIT
