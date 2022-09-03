const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js')

app.use(bodyParser.urlencoded({ extended: false }));

// admin routes
app.use('/admin',adminRoutes);

// user routes
app.use(shopRoutes);

// any routes
app.use((req, res) => {
	res.status('404').send('<h1>Page not Found</h1>')
})

app.listen(3000);
