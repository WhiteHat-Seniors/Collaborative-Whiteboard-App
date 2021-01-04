// const { Router } = require("express");
const express = require('express')
const Router = express.Router()
const {signout,signup ,login,home } = require('../controllers/auth')

Router.get('/',home);

Router.post('/signup',signup);

Router.post('/login',login);

Router.get('/signout',signout);

// Router.get('/collabrate',isLogedIn,(req,res)=>{  // using a protected route....
//     res.send("A protected Route");
// })

module.exports = Router;