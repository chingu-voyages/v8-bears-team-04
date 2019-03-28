const path = require('path');
const express = require('express');
const app = express();

const { commonalities } = require('./middleware/commonMiddlewares');
const commonRoutes = require('./routes/commonRoutes');
const UserAuth = require('./routes/UserAuth');

app.use(commonalities);
// custom backend routes
app.use(commonRoutes);

//user authentication
app.use('/auth', UserAuth)

// for each unknown path it will send back the index of 
// react app
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app;