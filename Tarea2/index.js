const express = require("express");
require("dotenv").config();

const app = express();
const routes = require("./src/routes");

const port = process.env.PORT || 4000;

app.use(express.json());

app.use(routes);

app.listen(port, () => {
	if (process.env.NODE_ENV === "dev") {
		console.log(`Server running on port ${port}`);
	} else {
		console.log(`Server running`);
	}
});
