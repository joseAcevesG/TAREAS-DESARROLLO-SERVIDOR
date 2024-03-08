// https://newsapi.org/v2/everything?q=Mexico&sortBy=relevancy
const axios = require("axios");
const ResponseStatus = require("../utils/response-codes");

class NewsController {
	getNews(req, res) {
		const filter = req.query.filter;
		const url = `https://newsapi.org/v2/everything?q=${filter}&sortBy=relevancy&apiKey=${process.env.NEWS_API_KEY}`;
		axios
			.get(url)
			.then((response) => {
				res.render("news", { news: response.data.articles });
				// res.status(ResponseStatus.SUCCESS).send(response.data);
			})
			.catch((error) => {
				console.error(error);
				res.status(ResponseStatus.INTERNAL_SERVER_ERROR).send(
					"Something went wrong"
				);
			});
	}
}

module.exports = new NewsController();
