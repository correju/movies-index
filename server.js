var express = require("express")
var data = require('./data.js')
var http = require('http')

var app = express()

app.set("view engine", "pug");
//app.use(express.static('public'));

var port = process.env.PORT || 3000

app.all("/json/conf", (req, res) => {;
	var options = {
		host: 'localhost',
		port: 80,
		path: '/conf'
	}
	var body = []

	http.get(options, function(r){
		r.on('data', chunk =>{
			body.push(chunk);
		}).on('end', () => {
			body = JSON.parse(Buffer.concat(body).toString())
			res.status(200).json(data.conf)
		})
	}).on("error", function(e){
		console.log("Got error: " + e.message)
	})
})

app.all("/*", (req, res) => {
	res.render("index")
})

app.listen(port, function(){
    console.log(`server running in port ${port}`)
})