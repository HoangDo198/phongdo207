const express = require("express");
const app = express();
const os = require("os");

app.get("/get-server-name", (req, res)=>{res.send("Hi From: "+ process.env.NODE_ENV )});

app.listen(3000, ()=>{
	console.log("Run Port 3000");
	console.log(process.env);
});