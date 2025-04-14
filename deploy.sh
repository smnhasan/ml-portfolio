#!/bin/bash

# Exit on error
set -e

echo "⚙️  Building the project..."
npm run build

echo "🚀 Deploying to GitHub Pages..."
git add .
git commit -m "Deploy site"
git push

# Remove and recreate gh-pages branch with built assets
git worktree add dist gh-pages
cd dist
git init
git remote add origin https://github.com/your-username/ml-portfolio.git
git checkout -b gh-pages
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force
cd ..
git worktree remove dist
