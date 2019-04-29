const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const LocalStrategy = require('passport-local');
const passport = require('passport');

const app = express();

const { commonalities } = require('./middleware/commonMiddlewares');
const commonRoutes = require('./routes/commonRoutes');
const UserAuth = require('./routes/UserAuth');
const Search = require('./routes/search')

let config = require('./config/utils')



//user authentication
const User = require('./models/UserAuth')

app.use(cors() )

app.use(passport.initialize());


passport.serializeUser(User.serializeUser() )
passport.deserializeUser(User.deserializeUser() )

passport.use(User.createStrategy() )



//database connection
mongoose.connect(
	config.db,
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
app.use('/search', Search)

// for each unknown path it will send back the index of 
// react app
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "client", "public", "index.html"));
});

module.exports = app;