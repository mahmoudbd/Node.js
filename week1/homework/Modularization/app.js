const padLeft = require('./andrejs-awesome-function');

numbers = [ '12', '846', '2', '1236' ];

numbers.forEach((number) => {
	console.log(padLeft(number, 4, '_'));
});
