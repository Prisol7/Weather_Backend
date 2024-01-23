const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

require('dotenv').config();
const apiKey = process.env.API_KEY;

app.use(cors());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('hello world');
})

app.get('/weather/:c', async (req,res) => {
	const city = req.params.c;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
	const response = await fetch(url);
	const data = await response.json();
	res.send(data)
	

})

app.get('/initial/location', async (req, res) => {
	const lat = req.query.lat;
	const lon = req.query.lon;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
	const response = await fetch(url);
	const data = await response.json();
	res.send(data)
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);


