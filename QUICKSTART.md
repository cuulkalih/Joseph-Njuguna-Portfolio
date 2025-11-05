# ⚡ Quick Start Guide

**Get your portfolio live in 5 minutes!**

## 🎯 What You Have

A complete, professional two-sided portfolio website featuring:
- **Front Side**: Cybersecurity theme with particle animations
- **Back Side**: Software Development theme with modern design
- **3D Flip Animation**: Smooth rotation between sides
- **Fully Responsive**: Works on all devices
- **Zero Setup**: Ready for GitHub Pages

## 🚀 3-Step Deployment

### Step 1: Update Your Info (2 minutes)

Open `index.html` and find/replace:
- `Joseph Njuguna` → Your Name
- `joseph.njuguna@example.com` → Your Email
- `josephnjuguna` → Your GitHub username (in all links)
- Update LinkedIn, Twitch, YouTube URLs
- Change projects, skills as needed

**Optional**: Add your profile photo
- See `IMAGE_GUIDE.md` for details
- Or deploy with placeholder avatar first

### Step 2: Create GitHub Repository (1 minute)

1. Go to [github.com](https://github.com) → New Repository
2. **Name**: `YOUR-USERNAME.github.io` (replace YOUR-USERNAME)
3. Make it **Public** ✅
4. Click **Create**

### Step 3: Upload & Deploy (2 minutes)

**Option A - Web Upload (Easiest)**:
1. Click "Add file" → "Upload files"
2. Drag ALL files into the box
3. Commit changes
4. Wait 2 minutes
5. Visit: `https://YOUR-USERNAME.github.io`

**Option B - Git Command Line**:
```bash
cd C:\Users\ndiir\Documents\projects\portfolio
git init
git add .
git commit -m "Deploy portfolio"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git branch -M main
git push -u origin main
```

## ✅ Checklist

Before going live:
- [ ] Updated name and email
- [ ] Changed GitHub username in links
- [ ] Updated social media URLs
- [ ] Added profile photo (or using placeholder) 📸
- [ ] Tested flip animation locally
- [ ] Checked on mobile (resize browser)
- [ ] Repository created correctly
- [ ] Files uploaded to GitHub
- [ ] Site is live!

## 🧪 Test Locally First

1. Double-click `index.html` to open in browser
2. Click "Switch Side" button (or press F)
3. Check both sides work correctly
4. Verify all links
5. Resize window to test mobile view

## 📁 Files You Need

All of these should be uploaded:
```
✅ index.html                   (Main website)
✅ style.css                    (All styling)
✅ script.js                    (Interactive features)
✅ assets/
   ├── favicon.svg              (Logo icon)
   ├── profile-placeholder.svg  (Default avatar)
   └── profile.jpg              (Your photo - add later)
```

Optional files (helpful but not required for site):
```
📄 README.md        (GitHub description)
📄 DEPLOYMENT.md    (Detailed deployment guide)
📄 FEATURES.md      (Complete feature list)
📄 IMAGE_GUIDE.md   (Profile photo setup)
📄 QUICKSTART.md    (This file)
📄 .gitignore       (Git settings)
```

## 🎨 Quick Customizations

### Change Colors
Edit `style.css` lines 30-40:
```css
--cyber-primary: #00f6ff;    /* Cyan → Your color */
--dev-primary: #6366f1;      /* Purple → Your color */
```

### Add a Project
Copy this in `index.html`:
```html
<div class="project-card cyber-card">
    <div class="project-icon">
        <i class="fas fa-rocket"></i>
    </div>
    <h3>Your Project Name</h3>
    <p>Description...</p>
    <div class="project-tags">
        <span class="tag">Tech1</span>
        <span class="tag">Tech2</span>
    </div>
</div>
```

### Change Skills
Find the skills section in `index.html` and add:
```html
<div class="skill-item">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
```

## 🔧 Troubleshooting

**Site shows 404?**
- Wait 2-3 minutes after upload
- Check repo name: must be `YOUR-USERNAME.github.io`
- Ensure repository is **Public**

**Animations not working?**
- Clear cache: Ctrl + Shift + R
- Try different browser
- Check console: F12 → Console tab

**Looks broken on mobile?**
- Test in real mobile device, not just small window
- Try incognito mode
- Update browser

## 📱 Features to Try

- Click **Switch Side** button
- Press **F** key to flip
- Hover over project cards (desktop)
- Check particle animation on cybersecurity side
- Test navigation links
- Try all contact buttons
- View on mobile device

## 🎯 Next Steps

After deployment:
1. ⭐ Star your own repo on GitHub
2. 📌 Pin repository to your GitHub profile
3. 🔗 Add link to LinkedIn profile
4. 📧 Add to email signature
5. 📱 Share on social media
6. 💼 Include in resume/CV

## 📞 Need More Help?

- **Detailed Guide**: See `DEPLOYMENT.md`
- **All Features**: See `FEATURES.md`
- **GitHub Docs**: [docs.github.com/pages](https://docs.github.com/pages)

## 🎉 You're Done!

Your portfolio should now be live at:
```
https://YOUR-USERNAME.github.io
```

**Share it with the world! 🌍**

---

**⏱️ Total Time: 5 minutes**
**💰 Cost: $0 (Free)**
**🔧 Maintenance: Minimal**

Built for Joseph Njuguna | CUULKAL
Ready to deploy and impress! 🚀

