# Deployment Guide

This guide will help you deploy your portfolio to Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (sign up at https://vercel.com)

## Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!**
   - Your site will be live at `your-project.vercel.app`
   - Every push to `main` will automatically deploy

## Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **For production deployment**
   ```bash
   vercel --prod
   ```

## Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables

If you add any API keys or secrets later:

1. Create `.env.local` file (already gitignored)
2. Add variables in Vercel dashboard:
   - Project Settings → Environment Variables
   - Add your variables
   - Redeploy

## Continuous Deployment

Vercel automatically deploys:
- **Production**: Pushes to `main` branch
- **Preview**: Pushes to other branches or pull requests

## Build Commands

- Development: `npm run dev`
- Build: `npm run build`
- Start production server: `npm start`
- Lint: `npm run lint`

## Troubleshooting

### Build fails
- Check the Vercel build logs
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

### Styling issues
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

### Need help?
- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs

## Performance Tips

Your site is already optimized with:
- ✅ Static page generation
- ✅ Automatic code splitting
- ✅ Image optimization ready
- ✅ CSS optimization via Tailwind

No additional configuration needed!
