# 🔐 Joseph Njuguna - Personal Portfolio

A stunning two-sided portfolio website showcasing both **Cybersecurity** and **Software Development** expertise with a 3D flip animation.

## 🌟 Live Demo

Visit: **https://josephnjuguna.github.io**

## 👤 About

**Joseph Njuguna** (CUULKAL)
- 📍 Location: Nairobi, Kenya
- 🎓 Bachelor of Applied Computing (Information Security & Forensics)
- 🎯 Expected Graduation: 2025
- 💼 Dual expertise in Cybersecurity & Software Development

## ✨ Features

- 🎴 **3D Flip Animation**: Smooth rotating card effect between two professional sides
- 📸 **Profile Image**: Large (350px) with animated gradient border, side-by-side layout
- 💻 **Terminal Theme**: Cybersecurity side features authentic terminal/hacker aesthetic with green text, scanlines, CRT flicker
- 🔒 **Cybersecurity Side**: Deep black background, glowing green monospace text, command-line syntax, Matrix-style particles
- 💼 **Developer Side**: Light gradient theme with modern minimalist design
- 📱 **Fully Responsive**: Perfect on mobile, tablet, and desktop with optimized layouts
- 🎯 **Mobile-First Design**: Image-first stacking on mobile, side-by-side on desktop
- ⚡ **Zero Dependencies**: Pure HTML, CSS, and JavaScript
- 🎨 **Modern UI/UX**: Beautiful animations and interactive elements
- ♿ **Accessible**: Keyboard navigation and screen reader friendly
- 🚀 **Performance Optimized**: 60fps animations, fast load times

## 🚀 GitHub Pages Deployment

### Method 1: Create New Repository (Recommended)

1. **Create a new repository** on GitHub:
   - Name: `josephnjuguna.github.io`
   - Make it **Public**
   - Don't initialize with README

2. **Clone this repository** to your local machine:
   ```bash
   git clone https://github.com/yourusername/josephnjuguna.github.io.git
   cd josephnjuguna.github.io
   ```

3. **Copy all files** into the repository:
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/` folder

4. **Commit and push**:
   ```bash
   git add .
   git commit -m "Initial portfolio deployment"
   git push origin main
   ```

5. **Wait 1-2 minutes** and visit:
   ```
   https://josephnjuguna.github.io
   ```

### Method 2: Using GitHub Web Interface

1. **Create repository** named `josephnjuguna.github.io`

2. **Upload files**:
   - Click "Add file" → "Upload files"
   - Drag and drop all files and the `assets` folder
   - Commit changes

3. **Enable GitHub Pages** (if not auto-enabled):
   - Go to **Settings** → **Pages**
   - Source: Deploy from a branch
   - Branch: `main` or `master`
   - Folder: `/ (root)`
   - Click **Save**

4. **Access your site**: `https://josephnjuguna.github.io`

### Method 3: Custom Domain (Optional)

1. **Configure custom domain**:
   - Settings → Pages → Custom domain
   - Enter your domain (e.g., `josephnjuguna.com`)

2. **Update DNS settings** with your domain provider:
   ```
   Type: A Record
   Host: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: josephnjuguna.github.io
   ```

3. **Enable HTTPS** in GitHub Pages settings

## 📁 File Structure

```
josephnjuguna.github.io/
│
├── index.html                    # Main HTML structure
├── style.css                     # All styling and animations
├── script.js                     # JavaScript functionality
├── test-responsive.html          # Responsive testing tool
│
├── README.md                     # This file - General overview
├── QUICKSTART.md                 # 5-minute setup guide
├── DEPLOYMENT.md                 # GitHub Pages deployment
├── FEATURES.md                   # Complete feature list
├── IMAGE_GUIDE.md                # Profile photo setup guide
├── MOBILE_GUIDE.md               # Mobile responsiveness guide
│
└── assets/
    ├── favicon.svg               # CUULKAL brand logo
    ├── profile-placeholder.svg   # Default avatar
    └── profile.jpg               # Your photo (add this)
```

## 🎨 Customization

### Update Personal Information

Edit `index.html` to change:
- Name, location, graduation year
- Project descriptions
- Skills
- Social media links
- Email address

### Add Your Profile Photo

See **`IMAGE_GUIDE.md`** for detailed instructions.

**Quick steps:**
1. Add your photo (800x800px) to `assets/` folder as `profile.jpg`
2. Update `src="assets/profile-placeholder.svg"` to `src="assets/profile.jpg"` in `index.html`
3. Done! Your photo now has an animated gradient border

### Modify Colors

Edit `style.css` variables:
```css
:root {
    /* Cybersecurity Colors */
    --cyber-bg: #0a0e27;
    --cyber-primary: #00f6ff;
    
    /* Developer Colors */
    --dev-bg: #f8f9fa;
    --dev-primary: #6366f1;
}
```

### Add More Projects

Copy a project card in `index.html`:
```html
<div class="project-card cyber-card">
    <div class="project-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Project Title</h3>
    <p>Project description...</p>
    <div class="project-tags">
        <span class="tag">Tech 1</span>
        <span class="tag">Tech 2</span>
    </div>
</div>
```

## ⌨️ Keyboard Shortcuts

- Press **F** or **f** to flip between sides
- **Tab** to navigate through interactive elements
- **Enter** to activate buttons and links

## 🎯 Sections

### Cybersecurity Side (Front)
- 🛡️ About Me (Security Focus)
- 🔍 Key Security Projects
- 💪 Security Skills
- 📧 Contact

### Software Development Side (Back)
- 👨‍💻 About Me (Developer Focus)
- 🚀 Featured Projects
- 🛠️ Development Skills & Technologies
- 📬 Contact & Social Links

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Animations, Grid, Flexbox, 3D transforms
- **JavaScript (ES6+)**: Interactive features
- **Font Awesome**: Icons
- **Google Fonts**: Poppins & Fira Code

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📱 Responsive Design

### Breakpoints & Layouts

| Device | Width | Hero Layout | Image Size | Projects | Skills |
|--------|-------|-------------|------------|----------|--------|
| **Desktop** | >992px | Side-by-side | 350px | 2-3 cols | 4-6 cols |
| **Tablet L** | 768-992px | Side-by-side | 280px | 2 cols | 3-4 cols |
| **Tablet** | 481-768px | Stacked | 250px | 1 col | 2 cols |
| **Mobile** | ≤480px | Stacked | 200px | 1 col | 1 col |

### Key Features
- ✅ **Desktop**: Text left, image right (side-by-side)
- ✅ **Mobile**: Image top, text below (stacked, centered)
- ✅ **Touch-optimized**: 44px+ tap targets
- ✅ **No horizontal scroll**: Content fits all screens
- ✅ **Performance**: 60fps animations on mobile

**📖 Full Guide**: See `MOBILE_GUIDE.md` for complete responsive documentation

### Test Responsiveness

**Option 1: Browser DevTools**
- Press `F12` → Click device icon → Choose device

**Option 2: Interactive Tester**
- Open `test-responsive.html` in your browser
- Visual testing across all device sizes
- One-click device switching
- Portrait/Landscape rotation

## 🐛 Troubleshooting

### Site not loading?
- Wait 1-2 minutes after pushing changes
- Check repository name is exactly `josephnjuguna.github.io`
- Ensure repository is **Public**
- Verify files are in root directory, not a subfolder

### 3D flip not working?
- Check browser compatibility
- Ensure JavaScript is enabled
- Clear browser cache (Ctrl + Shift + R)

### Particles not showing?
- Check browser console for errors
- Ensure `script.js` is loading correctly
- Try a different browser

## 📚 Documentation

- **`README.md`** - This file, general overview
- **`QUICKSTART.md`** - 5-minute deployment guide
- **`DEPLOYMENT.md`** - Detailed GitHub Pages setup
- **`FEATURES.md`** - Complete feature documentation
- **`IMAGE_GUIDE.md`** - Profile photo setup
- **`MOBILE_GUIDE.md`** - Mobile responsiveness guide
- **`TERMINAL_THEME.md`** - Terminal/hacker aesthetic documentation
- **`LAYOUT_SUMMARY.md`** - Visual layout guide

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## 👨‍💻 Developer

**Joseph Njuguna**
- GitHub: [@josephnjuguna](https://github.com/josephnjuguna)
- LinkedIn: [josephnjuguna](https://linkedin.com/in/josephnjuguna)
- Twitch: [CUULKAL](https://twitch.tv/CUULKAL)
- YouTube: CUULKAL Tech & Gaming
- Email: joseph.njuguna@example.com

## 🙏 Acknowledgments

Built with ❤️ by Joseph Njuguna (CUULKAL)
- Pure HTML, CSS, and JavaScript
- No frameworks or build tools
- Optimized for GitHub Pages
- Designed for dual professional identity

---

**⭐ If you like this portfolio, give it a star on GitHub!**

**🔗 Share**: Help others discover this unique two-sided portfolio approach!

## 🚀 Quick Start Guide

1. **Fork or download** this repository
2. **Update** personal information in `index.html`
3. **Customize** colors and styling in `style.css`
4. **Test locally** by opening `index.html` in a browser
5. **Push to GitHub** repository named `josephnjuguna.github.io`
6. **Visit** your live site!

---

Made with 🔐 Security & 💻 Code | © 2025 Joseph Njuguna | CUULKAL

