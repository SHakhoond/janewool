var Product = require('../models/product');
var mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/shopping');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('were connected!')
});



var products = [
	new Product({
		imagePath :'https://c1.staticflickr.com/9/8452/7936998300_6ab78565ff_b.jpg',
		title :'sheeeeeeeeeeep',
		description:'woooooooooll',
		price :200
	}),
	new Product({
		imagePath :'../images/test1.jpg',
		title :'nzzzzzz animal',
		description:'woooooooooll',
		price :200
	}),
	new Product({
		imagePath :'../images/nz sheep.jpg',
		title :'img3',
		description:'hiiiiiiiiiiiii',
		price :200
	})
];

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}


function exit() {
    mongoose.disconnect();
}