const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./src/routes");
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();

const port = process.env.PORT || 4000;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "public")));
app.use(routes);

async function start() {
	const db_url = process.env.DB_IRL;
	try {
		await mongoose.connect(db_url);
		console.log("Connected to db");
		app.listen(port, () => {
			if (process.env.NODE_ENV === "dev") {
				console.log(`Server running on port ${port}`);
			} else {
				console.log(`Server running`);
			}
		});
	} catch (error) {
		console.log("Error connecting to db", error);
	}
}

start();
