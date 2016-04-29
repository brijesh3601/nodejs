
Steps to Scratch Application 
---------------------------------------


- touch server.js on command</br>
- npm install -g nodemon , will help auto deply changes</br>
- npm install ejs@2.3.4 --save --saveexact
- npm install express@4.13.3 --save, will retain express version in package.json</br>
- nodemon server.js , this will make server run on port 3000</br>
- http://localhost:3000, on browser to see in action</br>


NOTES
---------------------------------------
- 'views' folder is default for ejs template you can change using app.set('views', './someotherfolder') if you want </br>
- ejs maps 'login' & variable 'pageTitle' pass in render method to right templating file which is login.ejs.


Steps to Checkout this application
---------------------------------------
1) git clone https://github.com/brijesh3601/nodejs.git, this will clone nodejs or  click 'Download Zip' button on github </br>
2) On cmd prompt go to folder 'expressApp'</br>
3) nodemon server.js  (or node server), will run server on port 3000
4) http://localhost:3000, on browser to see in action</br>
