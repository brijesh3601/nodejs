'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3333;

const router = express.Router();
const qs = require('querystring');


app.set('view engine', 'ejs');

//if bodyParser is not use as below then during post the req.body will not be able parse body & content in req.body will be undefined
app.use(bodyParser.urlencoded({
  extended: true
}));


router.get('/', (req, res) => {

	res.render('login', {
							loginHdr : 'Login Page'
						}
			  );

	console.log(req.query);

});





router.post('/', (req, res) => {

	res.render('details', {
							username : req.body.username,
							detailHdr : 'Details'
						}
			  );

	console.log(req.body);

});



app.use(router);

app.listen(port);

console.log('Listening at port => ' + port);


