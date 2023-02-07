const express = require('express');
const swapiAPI = express.Router();
const dbo = require('../db/conn');

// GET all characters.
swapiAPI.route('/people')
.get(
    async function (req, res) {
        const dbConnect = dbo.getDb();

        dbConnect
        .collection('people')
        .find({})
        .limit(100)
        .toArray(function (err,result) {
            if (err) {
                res.status(400).send('Error fetching characters');
            } else {
                console.log(result);
                res.json(result);
            }
        })
    }
)