const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
	name: String,
	email: String,
	password: String
})


module.exports = model('User', UserSchema)