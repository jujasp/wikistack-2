var express = require('express');
var router = new express.Router();
module.exports = router;

router.get('/', function(request, response, next) {
	response.send('this is /wiki/!')
})

router.post('/', function(request, response, next){
	response.send('this is a post!!!!!')
})

router.get('/add', function(request, response, next){
	response.send("welcome to /add at wiki!!!")
})