const fetch = require('node-fetch');
const url = 'https://reservation100-sandbox.mxapps.io/api/reservations';
const myReservation = {
	name: 'Mahmoud & Adam',
	numberOfPeople: 5
};

function reservation(url, body) {
	fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	})
		.then((res) => res.text())
		.then((text) => {
			console.log(text);
		})
		.catch((err) => {
			console.log(err);
		});
}

reservation(url, myReservation);
