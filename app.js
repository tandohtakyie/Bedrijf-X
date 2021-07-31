const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

const PORT = process.env.PORT || 5000;

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// CSS
app.use('/css',express.static(__dirname +'/css'));

// LOCAL IMAGES
app.use(express.static(__dirname + '/images/'));

// Route
app.use('/', require('./routes/index'));

app.listen(PORT, console.log(`Server started on port ${PORT}`));


