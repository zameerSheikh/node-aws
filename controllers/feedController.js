const database = require('../db');

exports.getPosts = (req, res, next) => {
    database.execute('SELECT * FROM posts')
    .then(posts => {
        res.status(200).json({data: posts[0]})
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