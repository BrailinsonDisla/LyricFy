module.exports = function SpotifyAPIController(req, res) {
    // Private methods
    const _getAccessToken = async () => {
        const result = await fetch(process.env.accessTokenURI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(`${process.env.clientID}:${process.env.clientSecret}`)
            },
            body: 'grant_type=client_credentials'
        });

        // Waits for the 'fetch' result
        const data = await result.json();

        return {token: data.access_token, token_type: data.token_type};
    }

    const _getAuthToken = () => {
        const scopes = 'user-read-private user-read-email';

        // Creates the autthorization URL
        const authenticationURL = `${process.env.authorizationTokenURI}?client_id=` +
                                `${encodeURIComponent(process.env.clientID)}&redirect_uri=` +
                                `${encodeURIComponent(process.env.authenticationRedirectURI)}&scope=` + 
                                `${encodeURIComponent(scopes)}&response_type=token&state=12039&show_dialog=true`;

        // Requests user to authorize
        return authenticationURL;
    }

    return {getAccessToken: _getAccessToken(), getAuthToken: _getAuthToken()};
};