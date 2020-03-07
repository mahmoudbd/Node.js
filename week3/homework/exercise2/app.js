const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.get('/', (req, res) => {
	fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books ', {
		headers: { Authorization: 'Basic YWRtaW46aHZnWDhLbFZFYQ==' }
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			res.end();
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
