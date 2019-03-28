const path = require('path');
const express = require('express');
const app = express();

const { commonalities } = require('./components/common/commonMiddlewares');
const commonRoutes = require('./components/common/commonRoutes');

app.use(commonalities);
// custom backend routes
app.use(commonRoutes);

// for each unknown path it will send back the index of 
// react app
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app;