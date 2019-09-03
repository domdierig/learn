import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("HelloWorld!");
});
app.listen(port, err => {
	if(err) {
		return console.log("err");
	}
	return console.log(`server is listening on ${port}`);
});