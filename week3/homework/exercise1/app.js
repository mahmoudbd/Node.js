const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.get('/', (req, res) => {
	fetch('http://api.icndb.com/jokes/random')
		.then((res) => res.json())
		.then((json) => {
			console.log(json.value.joke);
			res.end(`<p> ${json.value.joke} </p>`);
		})
		.catch((err) => {
			console.log(`There is an error ${err}`);
			res.status = 500;
			res.end('Error');
		});
});

app.listen(port, () => {
	console.log(`server started on port ${port}...`);
});
