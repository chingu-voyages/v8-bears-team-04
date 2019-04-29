let axios = require('axios')
let util = require('util')




class SearchCtrl {

	getPaginatedItems(items, offset){
		return items.slice(offset, offset + PER_PAGE)
	}

	static Search(req,res) {
		let search_request = req.query.q

		let client_secret = 'RRFGBYKVIUEHN4Q0F0TFBFIOAHLYZDPYMQKHEDDTZLRVPUB2'
		let client_id = 'GCLL25RPFTOWPI5TUVAEFGAQUIBVOA3KZVVWMXAIVRRAJUAO'


		//geo location
		let lat = req.query.lat //40.7
		let long = req.query.long //-80

		//pagination data
		let offset = req.query.offset ? parseInt(req.query.offset, 10) : 0
		let PER_PAGE = 10
		let nextOffset = offset + PER_PAGE;
		let previousOffset = offset - PER_PAGE < 1 ? 0 : offset - PER_PAGE;





		//   let json = {
		//     meta: meta,
		//     comments: items.slice(offset, offset + PER_PAGE)
		//   };

		// return res.json(json);

		//user gives in search query and allows for latitude and longitude values
		let requestData = search_request && lat && long

		if( requestData ) {
				//api connection
			let api = `https://api.foursquare.com/v2/venues/search?client_id=${client_id}&client_secret=${client_secret}&ll=${lat},${long}&query=${search_request}&v=20180609`

			//make api call
			axios.get(api)
			.then(results => {
				const venues = results.data.response.venues

				let meta = {
				    limit: PER_PAGE,
				    next: util.format('?limit=%s&offset=%s', PER_PAGE, nextOffset),
				    offset: req.query.offset,
				    previous: util.format('?limit=%s&offset=%s', PER_PAGE, previousOffset),
				    total_count: venues.length,
				  };

				const response = {
					meta: meta,
					result: venues.slice(offset, offset + PER_PAGE)
				}
				return res.json(response)
			})

		}else {
			return res.json({
				message: "No search request made"
			})
		}

		

	}

}


module.exports = SearchCtrl