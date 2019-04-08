let axios = require('axios')

class SearchCtrl {

	static Search(req,res) {
		let search_request = req.query.q
		let client_secret = 'RRFGBYKVIUEHN4Q0F0TFBFIOAHLYZDPYMQKHEDDTZLRVPUB2'
		let client_id = 'GCLL25RPFTOWPI5TUVAEFGAQUIBVOA3KZVVWMXAIVRRAJUAO'

		let query = null

		//geo location
		let lat = 40.7
		let long = -80



		if(search_request) {
				//api connection
			let api = `https://api.foursquare.com/v2/venues/search?client_id=${client_id}&client_secret=${client_secret}&ll=${lat},${long}&query=${search_request}&v=20180609`

			//make api call
			axios.get(api)
			.then(response => {
				return res.json(response.data.response)
			})

		}else {
			return res.json({
				message: "No search request made"
			})
		}

		

	}

}


module.exports = SearchCtrl