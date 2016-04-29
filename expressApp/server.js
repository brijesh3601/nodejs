'use strict';

const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req,res,next) => {

	res.send('<h1>I am on Express!!</h1>');
})


app.listen(app.get('port'),()=> {

 	console.log('Running on port ', app.get('port'));
});