const SpotifyAPIController = require('./src/controllers/SpotifyAPIController.js')
const dotenv = require('dotenv').config();
const express = require('express');

// Create Express JS app
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>React Frontend Not Working</h1>');
})

app.get('/api/authorize', async (req, res) => {
    res.json({"url": SpotifyAPIController().getAuthToken});
})

/// CREATE callback here

app.listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
})