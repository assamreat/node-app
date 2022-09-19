const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Home page node app');
});

app.listen(5000, () => {
    console.log('Server running at port 5000');
});
