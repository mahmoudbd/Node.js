const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.port || 3000;

// Middleware
app.use(express.json());

// post - create
app.post('/blogs', (req, res) => {
	const title = req.body.title;
	const content = req.body.content;
	fs.writeFileSync(title, content);
	res.end('ok');
});

// put - update
app.put('/blogs', (req, res) => {
	const title = req.body.title;
	const content = req.body.content;
	if (fs.existsSync(title)) {
		fs.writeFileSync(title, content);
		res.end('ok');
	} else {
		res.end('post does not exist');
	}
});

// Delete
app.delete('/blogs/:title', (req, res) => {
	fs.unlinkSync(req.params.title);
	res.end('ok');
});

//GET
app.get('/blogs/:title', (req, res) => {
	const title = req.params.title;
	res.sendFile(title, {
		root: __dirname,
		headers: {
			'Content-Type': 'text/plain'
		}
	});
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}...`);
});
