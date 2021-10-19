const db = require('../database/connection');

exports.home = async (req, res) => {
    res.send("backend of https://shorturl.vercel.app")
}

exports.set = async (req, res) => {
    await db.collection('informations').findOne({ "_id": 1 }, async (err, result) => {
        await db.collection('urls').insertOne({
            "_id": result.current_urls + 1,
            "url": req.body.url
        })
        await db.collection("informations").updateOne({ "_id": 1 }, { $set: { "current_urls": result.current_urls + 1 } })
        res.json(result.current_urls + 1)
    })
}

exports.find = async (req, res) => {
    await db.collection('urls').findOne({ "_id": parseInt(req.params.id) }, (err, result) => {
        res.redirect(result.url);
    });
}