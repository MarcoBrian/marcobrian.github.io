# Marco Brian - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, deployed on GitHub Pages.

## 🚀 Live Site

**URL**: https://marcobrian.github.io

## 📁 Repository Structure

```
marcobrian.github.io/
├── main branch (source code)
│   ├── src/                    # React components
│   ├── public/                 # Static assets
│   ├── package.json           # Dependencies
│   ├── next.config.ts         # Next.js configuration
│   └── .github/workflows/     # GitHub Actions
└── gh-pages branch (deployed files)
    ├── index.html             # Main page
    ├── _next/                 # Next.js assets
    └── [static assets]        # Images, CSS, JS
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

## 📦 Deployment Process

### Automatic Deployment (Recommended)

The site uses GitHub Actions for automatic deployment:

1. **Push to main branch** → Triggers GitHub Actions workflow
2. **GitHub Actions builds** → Creates static files in `out/` directory
3. **GitHub Actions deploys** → Pushes built files to `gh-pages` branch
4. **GitHub Pages serves** → From `gh-pages` branch

### Manual Deployment (If needed)

If automatic deployment fails, you can deploy manually:

```bash
# 1. Build the project
npm run build

# 2. Switch to gh-pages branch
git checkout gh-pages

# 3. Copy built files to root
cp -r out/* .

# 4. Remove build artifacts
rm -rf out .next node_modules

# 5. Commit and push
git add .
git commit -m "Manual deployment - $(date)"
git push origin gh-pages --force

# 6. Return to main branch
git checkout main
```

## ⚙️ GitHub Pages Configuration

### Required Settings

1. **Go to**: Repository Settings → Pages
2. **Configure**:
   - **Source**: "Deploy from a branch"
   - **Branch**: "gh-pages"
   - **Folder**: "/ (root)"
3. **Click "Save"**

### Important Notes

- ✅ **Main branch**: Contains only source code (no build files)
- ✅ **gh-pages branch**: Contains only static files (no source code)
- ✅ **Automatic deployment**: Every push to main triggers a new deployment
- ✅ **Clean separation**: Source code vs deployed files

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

#### 3. Large File Errors
- **Problem**: "File exceeds GitHub's 100MB limit"
- **Cause**: `node_modules` included in gh-pages branch
- **Solution**: Ensure only static files are in gh-pages branch

#### 4. Site Not Loading
- **Check**: GitHub Pages settings point to `gh-pages` branch
- **Verify**: `gh-pages` branch contains `index.html` at root
- **Wait**: GitHub Pages can take 1-2 minutes to update

### Debugging Steps

1. **Check GitHub Actions**: https://github.com/MarcoBrian/marcobrian.github.io/actions
2. **Verify gh-pages branch**: https://github.com/MarcoBrian/marcobrian.github.io/tree/gh-pages
3. **Check Pages settings**: https://github.com/MarcoBrian/marcobrian.github.io/settings/pages

## 📋 Workflow Summary

### For Developers

1. **Make changes** to source code in `main` branch
2. **Push to main** → Automatic deployment triggers
3. **Wait 2-3 minutes** → Site updates automatically
4. **Visit** https://marcobrian.github.io to see changes

### For Manual Updates

1. **Build locally**: `npm run build`
2. **Deploy manually**: Follow manual deployment steps above
3. **Verify**: Check gh-pages branch has latest files

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