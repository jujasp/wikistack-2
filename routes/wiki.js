var express = require('express');
var router = new express.Router();
module.exports = router;

router.get('/', function(request, response, next) {
	response.redirect('/')
})

router.post('/', function(request, response, next){
	response.json(request.body)
})


router.get('/add', function(request, response, next){
	response.render("addpage")
})

