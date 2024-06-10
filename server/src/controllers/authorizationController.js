const _requestAuthzToken = () => {
  const scopes = "user-read-private user-read-email";

  // Creates the authorization URL
  const authzURL =
    `${process.env.authzTokenURI}?client_id=` +
    `${encodeURIComponent(process.env.clientID)}&redirect_uri=` +
    `${encodeURIComponent(process.env.authzRedirectURI)}&scope=` +
    `${encodeURIComponent(
      scopes
    )}&response_type=code&state=12039&show_dialog=true`;

  // Requests user to authorize
  return authzURL;
};

const _getAuthzToken = async (code) => {
  const res = await fetch(process.env.accessTokenURI, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " + btoa(`${process.env.clientID}:${process.env.clientSecret}`),
    },
    body: new URLSearchParams({
      code: code,
      grant_type: "authorization_code",
      redirect_uri: process.env.authzRedirectURI,
    }),
  });

  // Waits for the 'fetch' result
  const data = await res.json();

  return data;
};

module.exports = {
  _requestAuthzToken: _requestAuthzToken,
  _getAuthzToken: _getAuthzToken,
};
