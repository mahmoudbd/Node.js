const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const axios = require('axios');
const port = process.env.port || 4000;

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.get('/', (req, res) => {
	res.render('index');
});

app.use(express.urlencoded({ extended: true }));

app.post('/wather', (req, res) => {
	const cityName = req.body.cityName;
	res.render('index', { cityName });
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`);
});
