# 🚀 GitHub Pages Deployment Checklist

Follow this step-by-step guide to deploy your portfolio to GitHub Pages.

## ✅ Pre-Deployment Checklist

### 1. Test Locally First
- [ ] Open `index.html` in a web browser
- [ ] Test the flip animation (click "Switch Side" button or press F)
- [ ] Check both sides (Cybersecurity & Software Development)
- [ ] Verify all links work (especially social media links)
- [ ] Test on mobile view (resize browser window)
- [ ] Verify particles animation is working
- [ ] Check console for any JavaScript errors (F12 → Console)

### 2. Customize Your Information
- [ ] Update name and personal details in `index.html`
- [ ] Change email address to your real one
- [ ] Update GitHub username from "josephnjuguna" to yours
- [ ] Update LinkedIn URL
- [ ] Update Twitch username (or remove if not needed)
- [ ] Update YouTube channel name
- [ ] Add/remove projects as needed
- [ ] Update skills sections
- [ ] Verify graduation year and location

### 3. Optional Customizations
- [ ] Change color scheme in `style.css`
- [ ] Add your own profile photo (optional)
- [ ] Update the favicon if desired
- [ ] Add Google Analytics (optional)
- [ ] Customize animation speeds

## 🌐 GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **+** icon (top right) → **New repository**
3. **IMPORTANT**: Name it exactly: `YOUR-USERNAME.github.io`
   - Replace `YOUR-USERNAME` with your actual GitHub username
   - Example: If username is "john", name it `john.github.io`
4. Make it **Public** ✅
5. Do NOT initialize with README
6. Click **Create repository**

### Step 2: Upload Files

#### Option A: Using Git Command Line

```bash
# Navigate to this portfolio folder
cd path/to/portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Option B: Using GitHub Web Interface

1. In your new repository, click **Add file** → **Upload files**
2. Drag and drop ALL files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - `assets` folder (with favicon.svg inside)
3. Scroll down and click **Commit changes**

### Step 3: Enable GitHub Pages

1. Go to your repository settings: **Settings** → **Pages**
2. Under "Source":
   - Branch: Select `main` (or `master`)
   - Folder: Select `/ (root)`
3. Click **Save**
4. Wait 1-2 minutes for deployment

### Step 4: Visit Your Site

```
https://YOUR-USERNAME.github.io
```

Example: `https://josephnjuguna.github.io`

## 🔧 Troubleshooting

### Site Shows 404 Error
- Wait 2-3 minutes after first deployment
- Check repository name is exactly `YOUR-USERNAME.github.io`
- Ensure repository is **Public**, not Private
- Verify `index.html` is in the root directory

### Flip Animation Not Working
- Clear browser cache: Ctrl + Shift + R (Windows) or Cmd + Shift + R (Mac)
- Check browser console (F12) for JavaScript errors
- Ensure `script.js` uploaded correctly

### Particles Not Showing
- Particles only show on the **front side** (Cybersecurity)
- Try a different browser (Chrome recommended)
- Check JavaScript console for errors

### Styles Look Wrong
- Hard refresh: Ctrl + F5
- Check if `style.css` uploaded correctly
- Verify Font Awesome CDN is loading (check internet connection)

### Images or Icons Not Loading
- Ensure `assets` folder uploaded with `favicon.svg` inside
- Check browser console for 404 errors
- Verify file paths are relative (no absolute paths)

## 🎨 Quick Customization Guide

### Change Colors

Edit `style.css`, find the `:root` section:

```css
:root {
    /* Cybersecurity Colors */
    --cyber-bg: #0a0e27;           /* Background */
    --cyber-primary: #00f6ff;      /* Main accent color */
    --cyber-secondary: #0084ff;    /* Secondary color */
    --cyber-accent: #00ff88;       /* Highlight color */
    
    /* Developer Colors */
    --dev-bg: #f8f9fa;             /* Background */
    --dev-primary: #6366f1;        /* Main accent color */
    --dev-secondary: #06b6d4;      /* Secondary color */
    --dev-accent: #8b5cf6;         /* Highlight color */
}
```

### Add New Project

Copy and paste a project card in `index.html`:

```html
<div class="project-card cyber-card">  <!-- or "dev-card" for developer side -->
    <div class="project-icon">
        <i class="fas fa-icon-name"></i>  <!-- Find icons at fontawesome.com -->
    </div>
    <h3>Your Project Title</h3>
    <p>Brief description of your project...</p>
    <div class="project-tags">
        <span class="tag">Technology 1</span>
        <span class="tag">Technology 2</span>
        <span class="tag">Technology 3</span>
    </div>
</div>
```

### Update Social Links

Find in `index.html` and update URLs:

```html
<a href="mailto:YOUR-EMAIL@example.com" class="contact-btn">
<a href="https://github.com/YOUR-USERNAME" target="_blank" class="contact-btn">
<a href="https://linkedin.com/in/YOUR-PROFILE" target="_blank" class="contact-btn">
```

## 📱 Testing Checklist

Before going live, test on:
- [ ] Desktop (Chrome)
- [ ] Desktop (Firefox)
- [ ] Mobile (Chrome)
- [ ] Mobile (Safari)
- [ ] Tablet view

## 🔐 Security Best Practices

- [ ] Don't commit real email if you want to avoid spam (use a contact form service)
- [ ] Remove any API keys or sensitive information
- [ ] Use professional links only
- [ ] Keep repository public for GitHub Pages to work

## 🎯 Post-Deployment

### Share Your Portfolio
1. Add link to your GitHub profile bio
2. Add to LinkedIn profile
3. Include in resume
4. Share on Twitter/social media

### Keep It Updated
- Regularly add new projects
- Update skills as you learn
- Keep contact information current
- Refresh design annually

### Monitor Analytics (Optional)
Add Google Analytics to track visitors:

1. Get tracking code from [Google Analytics](https://analytics.google.com)
2. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌟 Custom Domain Setup (Optional)

### 1. Purchase Domain
Buy from: Namecheap, GoDaddy, Google Domains, etc.

### 2. Configure DNS
Add these records in your domain provider's DNS settings:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

### 3. Update GitHub Settings
1. In repository: Settings → Pages → Custom domain
2. Enter your domain: `yourdomain.com`
3. Wait for DNS check (can take up to 24 hours)
4. Enable "Enforce HTTPS" ✅

## 📞 Need Help?

- **GitHub Pages Docs**: https://docs.github.com/pages
- **Troubleshooting**: https://docs.github.com/pages/getting-started-with-github-pages/troubleshooting-404-errors
- **Font Awesome Icons**: https://fontawesome.com/icons
- **CSS Tricks**: https://css-tricks.com

## ✅ Final Checklist

- [ ] Repository created with correct name
- [ ] All files uploaded to repository
- [ ] GitHub Pages enabled in settings
- [ ] Site is accessible at `https://YOUR-USERNAME.github.io`
- [ ] Tested on multiple devices
- [ ] All personal information updated
- [ ] All links working correctly
- [ ] No console errors
- [ ] Looks professional and polished

---

**🎉 Congratulations! Your portfolio is now live!**

Share it with the world: `https://YOUR-USERNAME.github.io`

---

*Last Updated: October 2025*
*For questions, contact: Joseph Njuguna*


