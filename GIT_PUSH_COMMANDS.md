# Git Push Commands

Once Git is installed, run these commands in your terminal:

```bash
# Navigate to the project directory
cd "C:\Users\Cuulkal\Documents\MEGA downloads\projects\portfolio"

# Initialize git repository (if not already initialized)
git init

# Add all files
git add .

# Commit the changes
git commit -m "Initial portfolio commit - Fixed flip button hover bug"

# Add remote repository
git remote add origin https://github.com/cuulkalih/Portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

If you get authentication errors, you may need to:
1. Use a Personal Access Token instead of password
2. Or use GitHub Desktop application for easier setup

