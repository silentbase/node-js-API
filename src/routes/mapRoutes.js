const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Marker = require('../modules/markerModel');

router.post('/addMarker', function (req, res, next) {
    const marker = new Marker({
        _id: new mongoose.Types.ObjectId,
        userID: req.body.userID,
        title: req.body.title,
        street: req.body.street,
        houseNumber: req.body.houseNumber,
        postalcode: req.body.postalcode,
        langt: req.body.langt,
        longt: req.body.longt

    })

    console.log("added marker");
    marker.save().then(function (marker) {
        res.status(200).json({
            "ID": marker._id,
            "userID": marker.userID,
            "title": marker.title,
            "street": marker.street,
            "houseNumber": marker.houseNumber,
            "postalcode": marker.postalcode,
            "langt": marker.langt,
            "longt": marker.longt
        })
    }).catch(function (error) {
        res.send(error);
    })
})

router.delete('/deleteMarker/:markerId', function (req, res, next) {
    Marker.findByIdAndDelete({ _id: req.params.markerId }).then(
        function (marker) {
            console.log("deleted marker");
            res.send(marker);
        }
    ).catch(function (error) {
        res.send(error);
    })
})

router.get('/getMarker', function (req, res, next) {
    Marker.find().then(function (markerArray) {
        console.log("get all markers");
        if (markerArray.length < 1) {
            return res.send(null);
        }
        res.send(markerArray);
    })
})

router.get('/getMarker/:userId', function (req, res, next) {
    Marker.find({ userID: req.params.userId }).then(function (markerArray) {
        console.log("get markers of userId");
        if (markerArray.length < 1) {
            return res.send(null);
        }
        res.send(markerArray);
    })
})

module.exports = router;