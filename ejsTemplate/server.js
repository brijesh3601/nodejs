'use strict';

const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');

app.get('/', (req,res,next) => {

	res.render('login', {
		pageTitle: 'I am running using EJS Template!!'
	});
})


app.listen(app.get('port'),()=> {

 	console.log('Running on port ', app.get('port'));
});