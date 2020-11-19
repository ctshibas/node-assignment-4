// import express
const express = require('express');

// router with express
const router = express.Router();

// have an object for users to be pushed into
const users = [];

router.get('/users', (req, res, next) => {
    // will contain the list of users submitted from form
    res.render('add-user', {
        pageTitle: "Add User",
        path: "/add-users"
    });
});

router.post('/users', (req, res, next) => {
    // will be used to push the data of the users into the /users page
    users.push({ username: req.body.username });
    res.redirect('/')
});

router.get('/', (req, res, next) => {
    // delivers the page where the form is to be carried out
    res.render('users', {
        users: users,
        pageTitle: "User List",
        path: "/"
    });
});

// exporting custom modules
exports.routes = router;
exports.users = users;