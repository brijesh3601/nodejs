var express = require('express');
var app = express();

var port = process.env.PORT || 3333;


var router = express.Router();

router.get('/', function(req, res){

	res.json({message: 'Basic Router!!'});
});

router.get('/about', (req, res) => {
	res.send("<h1>About</h1>");
});


app.use(router);

app.listen(port);

console.log('I am all ears at =>' + port);