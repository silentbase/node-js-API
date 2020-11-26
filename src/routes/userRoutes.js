
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../modules/userModel');

router.post('/login', function (req, res, next) {
    console.log("!");
    User.find({ email: req.body.email })
        .exec()
        .then(function (user) {
            if (user.length < 1) {
                return res.send.json({
                    message: 'Auth failed!'
                })
            }
            var result = user[0].password.localeCompare(req.body.password);

            if (result != 0) {
                return res.json({
                    message: 'Authentification failed !'
                })

            } else {
                return res.status(200).json({
                    "ID": user[0]._id,
                    "firstname": user[0].firstname,
                    "surename": user[0].surename,
                    "gender": user[0].gender,
                    "email": user[0].email,
                    "password": user[0].password
                })
            }
        }).catch(function (err) {
            res.send(err);
        })
});

router.post('/register', function (req, res, next) {
    const user = new User({
        _id: new mongoose.Types.ObjectId,
        firstname: req.body.firstname,
        surename: req.body.surename,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password
    })

    user.save().then(function (result) {
        res.status(200).json({
            //message: 'Handling Post requests to /users',
            //createdContact: user
            "ID": result._id
        });

    }).catch(function (err) {
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;