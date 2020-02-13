const database = require('../db');

exports.getPosts = (req, res, next) => {
    database.execute('SELECT * FROM posts')
    .then(posts => {
        res.status(200).json({data: posts[0]})
    })
}

exports.getEvents = (req, res, next) => {
    database.execute('SELECT * from instant_live')
    .then(events => {
        res.status(200).json({events: events[0]})
    })
}

exports.addPost = (req, res, next) => {
    const {title, description} = req.body;
    console.log('title, description: ', title, description);
    database.execute(`INSERT INTO posts (title, descripton) VALUES (${title}, ${description});`)
    .then(resp => {
        res.status(200).json({data: 'Successfully createda a post'});
    })
}

exports.getDummy = (req, res, next) => {
    res.json([
        { "id": 1, "label": "LA Breaking news", "value": "LA" },
        { "id": 2, "label": "NY Breaking news", "value": "NY" },
        { "id": 3, "label": "Denmark Breaking news", "value": "DN" },
        { "id": 4, "label": "Sample Breaking news 4", "value": "SM4" },
        { "id": 5, "label": "Sample Breaking news 5", "value": "SM5" },
        { "id": 6, "label": "Sample Breaking news 6", "value": "SM6" }
    ])
}