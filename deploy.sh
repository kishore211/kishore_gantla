#!/bin/bash

# Portfolio Deployment Script
# This script prepares and deploys the portfolio to Vercel

echo "🚀 Starting Portfolio Deployment Process..."

# Check if we're in the correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the portfolio directory."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run build to check for errors
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix the errors before deploying."
    exit 1
fi

echo "✅ Build successful!"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "⚠️  Vercel CLI not found. Installing globally..."
    npm install -g vercel
fi

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "🎉 Deployment complete!"
echo "📝 Note: If this is your first deployment, make sure to:"
echo "   1. Connect your GitHub repository to Vercel"
echo "   2. Configure your custom domain (if applicable)"
echo "   3. Set up any environment variables"
echo ""
echo "🔗 Your portfolio should be live at your Vercel URL!"
