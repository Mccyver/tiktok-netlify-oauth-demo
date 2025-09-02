const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  const clientKey = process.env.TIKTOK_CLIENT_KEY;
  const redirectUri = process.env.TIKTOK_REDIRECT_URI;

  const authUrl = `https://www.tiktok.com/auth/authorize/` +
    `?client_key=${clientKey}` +
    `&scope=user.info.basic,video.list` +
    `&response_type=code` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&state=state_demo`;

  return {
    statusCode: 302,
    headers: {
      Location: authUrl
    }
  };
};
