var express = require('express');

var app = express();


//will infuse javascript into html pages with ejs module
//ejs has some it's own syntex
app.set('view engine','ejs');

//now client side can access to public folder urls
//i.e in <link> tag source is public/assets/style.css is now accesible from client side
//otherwise style.css couldn't be linked. 
app.use(express.static('./public'));

app.listen(3000);
console.log('listing to port 3000');


