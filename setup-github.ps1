# GitHub Repository Setup Script for Tessellate Software Website
# This script will initialize git, create initial commit, and prepare for GitHub push

Write-Host "=== GitHub Repository Setup ===" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
$gitPath = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitPath) {
    Write-Host "ERROR: Git is not installed or not in PATH." -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Git first:" -ForegroundColor Yellow
    Write-Host "1. Download from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "2. Or install GitHub Desktop: https://desktop.github.com/" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "After installing Git, please run this script again." -ForegroundColor Yellow
    exit 1
}

Write-Host "Git found at: $($gitPath.Source)" -ForegroundColor Green
Write-Host ""

# Check if already a git repository
if (Test-Path ".git") {
    Write-Host "Git repository already initialized." -ForegroundColor Yellow
    $overwrite = Read-Host "Do you want to reinitialize? (y/N)"
    if ($overwrite -ne "y" -and $overwrite -ne "Y") {
        Write-Host "Skipping git initialization." -ForegroundColor Yellow
    } else {
        Remove-Item -Recurse -Force .git
        Write-Host "Reinitializing git repository..." -ForegroundColor Cyan
        git init
    }
} else {
    Write-Host "Initializing git repository..." -ForegroundColor Cyan
    git init
}

Write-Host ""
Write-Host "Adding all files to git..." -ForegroundColor Cyan
git add .

Write-Host ""
Write-Host "Creating initial commit..." -ForegroundColor Cyan
git commit -m "Initial commit: Tessellate Software website"

Write-Host ""
Write-Host "=== Setup Complete! ===" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps to create GitHub repository and push:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Create a new repository on GitHub:" -ForegroundColor Yellow
Write-Host "   - Go to: https://github.com/new" -ForegroundColor Yellow
Write-Host "   - Repository name: tessellate-software-website (or your preferred name)" -ForegroundColor Yellow
Write-Host "   - Description: Tessellate Software website built with Astro" -ForegroundColor Yellow
Write-Host "   - Choose: Public or Private" -ForegroundColor Yellow
Write-Host "   - DO NOT initialize with README, .gitignore, or license (we already have these)" -ForegroundColor Yellow
Write-Host "   - Click 'Create repository'" -ForegroundColor Yellow
Write-Host ""
Write-Host "2. Add the GitHub remote and push:" -ForegroundColor Yellow
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git" -ForegroundColor White
Write-Host "   git branch -M main" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "3. Deploy to Vercel:" -ForegroundColor Yellow
Write-Host "   - Go to: https://vercel.com/new" -ForegroundColor Yellow
Write-Host "   - Import your GitHub repository" -ForegroundColor Yellow
Write-Host "   - Vercel will auto-detect Astro and configure the build settings" -ForegroundColor Yellow
Write-Host "   - Deploy!" -ForegroundColor Yellow
Write-Host ""

