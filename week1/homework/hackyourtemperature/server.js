const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('hello from backend to frontend!');
});

const port = 3000;

app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`);
});
