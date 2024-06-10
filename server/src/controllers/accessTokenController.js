const _getAccessToken = async () => {
    const res = await fetch(process.env.accessTokenURI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${process.env.clientID}:${process.env.clientSecret}`)
        },
        body: 'grant_type=client_credentials'
    });

    // Waits for the 'fetch' result
    const data = await res.json();

    return {token: data.access_token, token_type: data.token_type, expires_in: data.expires_in};
}

module.exports = {
    _getAccessToken: _getAccessToken
}