var express = require('express');
var router = express.Router();
var Product  = require('../models/product');
var csrf = require('csurf')

var csrfProtection = csrf()
router.use(csrfProtection)
/* GET home page. */
router.get('/', function(req, res, next) {
	Product.find(function(err, doc) {
		var productChunk = [];
		var chunkSize = 3;
		for(var i = 0; i < doc.length; i += chunkSize) {
			productChunk.push(doc.slice(i, i + chunkSize ))	
		}

  		res.render('shop/index', { title: 'Express' , products: productChunk});		
	})
});

router.get('/user/signup', function(req, res, next) {
	res.render('user/signup', {csrfToken: req.csrfToken()})
})

router.post('/user/singup', function(req, res,next) {
	res.redirect('/')
})

router.get('/shop', function(req, res,next) {
	res.render('shop/shop', {title: 'Express'})
})

module.exports = router;
