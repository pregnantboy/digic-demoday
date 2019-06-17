const express = require('express')
const app = express()
const got = require('got')
const querystring = require('querystring');
const jwt = require('jsonwebtoken')
const jose = require('node-jose')

const CLIENT_SECRET = ''
const PRIVATE_KEY = ''

app.use('/static', express.static('static'))
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index')
})
app.get('/callback', async function (req, res) {
    /* Paste server code here */

    /* end */
    res.render('user', { ...userInfo, sub })
})

app.listen(3000)

