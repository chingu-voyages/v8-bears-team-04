const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const { commonalities } = require('./middleware/commonmiddlewares');
const commonRoutes = require('./routes/commonRoutes');
const UserAuth = require('./routes/UserAuth');


//user authentication
const User = require('./models/UserAuth')



//database connection
mongoose.connect(
	'mongodb://localhost/places-finder',
	{useNewUrlParser: true},
	(err,db)=>{
		if(err){
			console.warn('database not connected')
		}else{
			console.log('database connected')
		}
})


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