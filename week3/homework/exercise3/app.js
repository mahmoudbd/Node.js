const express = require('express');
const app = express();
const fetch = require('node-fetch');
const port = 3000;
const url = 'https://reservation100-sandbox.mxapps.io/api/reservations';

const myReservation = {
	name: 'Mahmoud & Adam',
	numberOfPeople: 5
};

app.get('/', (req, res) => {
	fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(myReservation)
	})
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
});

app.listen(port, () => {
	console.log(`server started on port ${port}...`);
});
