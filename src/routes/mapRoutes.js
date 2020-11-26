const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Marker = require('../modules/markerModel');

router.post('/addMarker', function(req, res, next){
    const marker = new Marker({
    _id: new mongoose.Types.ObjectId,
    userID: req.body.userID,
    title : req.body.title,
    street: req.body.street,
    houseNumber: req.body.houseNumber,
    postcode: req.body.postcode,
    })

    marker.save().then(function(result){
        res.status(200).json({
            "userID": result.userID
        })
    })
})

module.exports = router;