const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const axios = require('axios');
const port = process.env.port || 4000;
const APIKEY = require('./sources/keys.json').api_key;

app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	const greeting = 'Hack your temperature';
	res.render('index', { greeting });
});

app.post('/weather', (req, res) => {
	const cityName = req.body.cityName;
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`;

	axios
		.get(url)
		.then((response) => {
			return response.data;
		})
		.then((data) => {
			console.log(data);
			const sys = ` ${data.sys.country}`;
			const cityName = ` ${data.name}`;
			const temp = `Temperature ${data.main.temp}°C`;
			const maxTemp = ` Max temperature ${data.main.temp_max}°C`;
			const minTemp = `Min temperature ${data.main.temp_min}°C`;
			const para = 'Hack your temperature';
			const weather = { sys, cityName, temp, maxTemp, minTemp, para };

			res.render('index', weather);
		})
		.catch((err) => {
			res.render('index', {
				Error: `Error ${err.response.data.cod}  ${err.response.data.message}`
			});
		});
});

app.listen(port, () => {
	console.log(`server started on port ${port}...`);
});
