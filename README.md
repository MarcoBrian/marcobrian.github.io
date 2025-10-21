# Marco Brian - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, deployed on GitHub Pages.

## 🚀 Live Site

**URL**: https://marcobrian.github.io

## 📁 Repository Structure

```
marcobrian.github.io/
├── src/                    # React components
├── public/                 # Static assets
├── package.json            # Dependencies
├── next.config.ts          # Next.js configuration
└── .github/workflows/      # GitHub Actions (deploys to Pages on push to main)
```

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📦 Deployment

Deployed automatically to GitHub Pages via GitHub Actions.

1. **Push to `main`** → Triggers GitHub Actions workflow
2. **Workflow builds and publishes** → Uploads the Pages artifact
3. **GitHub Pages serves** → Latest build is deployed automatically

## ⚙️ GitHub Pages Configuration

### Required Settings

1. **Go to**: Repository Settings → Pages
2. **Configure**:
   - **Source**: "GitHub Actions"
3. **Click "Save"**

### Important Notes

- ✅ **Single-branch workflow**: `main` contains source code; no `gh-pages` branch needed
- ✅ **Automatic deployment**: Every push to `main` triggers a new deployment
- ✅ **Clean repo**: Build artifacts are not committed; the workflow uploads a Pages artifact

## 🔧 Troubleshooting

### Common Issues

#### 1. GitHub Actions Not Running
- **Check**: Repository Settings → Actions → General
- **Ensure**: "Allow all actions and reusable workflows" is selected
- **Note**: Private repositories have limitations with GitHub Actions

#### 2. Build Files in Main Branch
- **Problem**: Build files (`.next/`, `out/`) appear in main branch
- **Solution**: Check `.gitignore` includes `/.next/` and `/out/`
- **Clean up**: `git rm -r --cached .next out` then commit

#### 3. Site Not Loading
- **Check**: GitHub Pages settings use "GitHub Actions" as the source
- **Verify**: Latest workflow run finished with a successful "deploy" step
- **Wait**: GitHub Pages can take 1-2 minutes to update

### Debugging Steps

1. **Check GitHub Actions**: https://github.com/MarcoBrian/marcobrian.github.io/actions
2. **Check Pages settings**: https://github.com/MarcoBrian/marcobrian.github.io/settings/pages

## 📋 Workflow Summary

### For Developers

1. **Make changes** to source code in `main` branch
2. **Push to main** → Automatic deployment triggers
3. **Wait 2-3 minutes** → Site updates automatically
4. **Visit** https://marcobrian.github.io to see changes

## 🎯 Key Features

- **Responsive Design**: Works on all devices
- **Modern Stack**: Next.js 15, React 19, TypeScript
- **Performance**: Static site generation for fast loading
- **SEO Optimized**: Meta tags, structured data
- **News Showcase**: Twitter embeds, YouTube videos, articles
- **Interactive Elements**: Smooth animations with Framer Motion

## 📞 Support

If you encounter issues:

1. **Check this README** for common solutions
2. **Review GitHub Actions** logs for build errors
3. **Verify repository settings** are configured correctly
4. **Ensure clean branch separation** (source vs deployed files)

---

**Last Updated**: October 2024  
**Framework**: Next.js 15.5.4  
**Deployment**: GitHub Pages  
**Status**: ✅ Live at https://marcobrian.github.io