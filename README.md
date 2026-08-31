# 🚀 DevOps Portfolio Website

A responsive personal DevOps portfolio website deployed on
Amazon S3 using GitHub Actions for automated CI/CD.

### 🌐 Live Demo

🚀 **[View My Portfolio](http://devops-portfolio31-26.s3-website-us-east-1.amazonaws.com)**

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Git & GitHub
- GitHub Actions
- AWS S3
- AWS IAM

## 🏗️ Architecture

Developer
↓
Git Push
↓
GitHub Repository
↓
GitHub Actions
↓
AWS IAM Credentials
↓
Amazon S3
↓
🌐 Live Portfolio Website

## ⚙️ CI/CD Process

1. Developer makes changes to the website.
2. Changes are pushed to the `main` branch.
3. GitHub Actions automatically starts.
4. AWS credentials are securely loaded from GitHub Secrets.
5. Website files are synchronized with the S3 bucket.
6. The updated website becomes available to users.

## 🔐 AWS IAM

Created an IAM user with permissions required for deployment
to the S3 bucket.

AWS credentials are stored as GitHub repository secrets and
are not included in the source code.

## 📂 Project Structure

```text
.github/
└── workflows/
    └── main.yml

index.html
style.css
script.js
README.md