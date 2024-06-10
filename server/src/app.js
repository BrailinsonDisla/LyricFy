const {
  _requestAuthzToken,
  _getAuthzToken,
} = require("./controllers/authorizationController.js");
const { _getAccessToken } = require("./controllers/accessTokenController.js");
require("dotenv").config({ path: "../.env" });

const express = require("express");
const app = express();

// Sets static route for maintenance
app.use(express.static("public"));

// Authentication status for the app
const auth = {};

// Authenticates app
const authApp = () => {
  _getAccessToken().then((data) => {
    auth.authd = true;
    auth.authToken = data.token;
    auth.authTokenType = data.token_type;
    auth.expires_in = data.expires_in;
  });
};

authApp();
setInterval(authApp, 3600000);

app.get("/authorize", async (req, res) => {
  res.send({ url: _requestAuthzToken() });
});




// HANDLE AFTER USER IS AUTHORIZED
app.get("/authorized", async (req, res) => {
  const code = req.query.code;
  const state = req.query.state;

  if (code) {
    _getAuthzToken(code).then((data) => {
      res.redirect(`http://localhost:3000/?acess_token=${data.access_token}`);
    });
  } else {
    res.send(req.query.error);
  }
});

// Start server
app.listen(process.env.port, () => {
  console.log(`The server is running on port ${process.env.port}`);
});
