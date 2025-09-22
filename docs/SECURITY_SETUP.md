# Security Setup Guide

## ⚠️ CRITICAL: Environment Variables Security

This project handles sensitive credentials and API keys. Follow these security practices:

### 1. Environment File Setup

1. **Copy the example file:**
   ```bash
   cp backend/.env.example backend/.env
   ```

2. **Generate secure JWT secrets:**
   ```bash
   # Generate JWT secret (64 characters)
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   
   # Generate JWT refresh secret (64 characters)  
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

3. **Replace all placeholder values in `.env` with real credentials**

### 2. Never Commit These Files

The following files are ignored by git and should NEVER be committed:
- `.env`
- `.env.local`
- `.env.backup`
- Any file containing real credentials

### 3. Credential Management

- **JWT Secrets**: Must be at least 32 characters long, use cryptographically secure random strings
- **API Keys**: Obtain from your service providers (Sigma, etc.)
- **Passwords**: Use strong, unique passwords for admin accounts
- **Test Credentials**: Use dedicated test accounts, not production credentials

### 4. Production Security

- Rotate all secrets before deploying to production
- Use environment-specific configuration
- Enable HTTPS in production
- Consider using a secrets management service (AWS Secrets Manager, etc.)

### 5. Team Guidelines

- Never share `.env` files via chat, email, or unsecured channels
- Use `.env.example` to document required environment variables
- Rotate secrets regularly (quarterly recommended)
- Report any credential exposure immediately

## Quick Setup

1. Copy example file: `cp backend/.env.example backend/.env`
2. Generate JWT secrets using the commands above
3. Replace placeholder values with real credentials
4. Never commit the `.env` file

## Emergency Response

If credentials are accidentally exposed:
1. Immediately rotate all affected credentials
2. Remove from git history if committed
3. Notify team members
4. Audit access logs if applicable
