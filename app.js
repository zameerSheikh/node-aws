const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const port = 5000;
const feedRoutes = require('./routes/feedRoute');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/feed', feedRoutes);

app.get('/', (req, res, next) => {
    res.json({data: 'You are on home route'});
})
app.listen(port, () => {
    console.log(`app blooming on port ${port}`);
});