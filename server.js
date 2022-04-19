const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req,res) => {
	res.json({message: "Hello world this is testing the deployment....."});
});

const PORT = process.env.PORT || 7777;
app.listen(PORT, ()=> {
	console.log("server started at: ", PORT);
}); 
