# TikTok Netlify OAuth Demo

This is a sample project showing how to connect TikTok OAuth with Netlify Functions.

## Setup
1. Clone this repo.
2. Run `npm install`.
3. Set environment variables in Netlify dashboard:
   - `TIKTOK_CLIENT_KEY`
   - `TIKTOK_CLIENT_SECRET`
   - `TIKTOK_REDIRECT_URI`
4. Deploy to Netlify.

## Usage
- Go to `/.netlify/functions/oauth-login` to start the TikTok OAuth flow.
- TikTok will redirect back to `/.netlify/functions/oauth-callback`.
