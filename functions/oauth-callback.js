const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  const urlParams = new URLSearchParams(event.queryStringParameters);
  const code = urlParams.get("code");
  const state = urlParams.get("state");

  if (!code) {
    return { statusCode: 400, body: "Missing code" };
  }

  const response = await fetch("https://open-api.tiktokglobalshop.com/oauth/access_token/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_key: process.env.TIKTOK_CLIENT_KEY,
      client_secret: process.env.TIKTOK_CLIENT_SECRET,
      code,
      grant_type: "authorization_code",
      redirect_uri: process.env.TIKTOK_REDIRECT_URI
    })
  });

  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data, null, 2)
  };
};
