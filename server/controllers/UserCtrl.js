const User = require('../models/UserAuth')

class UserCtrl {

	static Login(req,res) {
		User.findOne(
			{email: req.body.email},(err,user)=>{
				if(err){
					throw err
				}
				if(!user) {
					return res.json({
						message: 'Invalid username or password'
					})
				}
				if(user) {
					return res.json({
						message: 'Login Success'
					})
				}
		})
	
	}


	static Register(req,res) {

		User.findOne(
			{email: req.body.email}, (err,user)=>{
				if(err){
					throw err
				}
				if(user) {
					return res.json({
						message: 'User already exists'
					})
				}else {
					const user = new User({
						name: req.body.name,
						email: req.body.email, 
						password: req.body.password
					})

					//save user
					user.save((err,user)=>{
						if(err){
							return res.json({
								error: 'Unable to register user at this time'
							})
						
						}else{
							return res.json({
								message: 'User Registered'
							})
						}

					})
				}

		})
	}

}


module.exports = UserCtrl