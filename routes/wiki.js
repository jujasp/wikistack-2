var express = require('express');
var router = new express.Router();
module.exports = router;

var models = require('../models');
var Page = models.Page;
var User = models.User;


router.get('/', function(request, response, next) {
	response.redirect('/')
})

router.post('/', function(request, response, next){
	var page = Page.create({
		title: request.body.title,
		content: request.body.content
	})
	.then(function(savedPage){
  	response.redirect(savedPage.route) // route virtual FTW
	})
	.catch(next);
});


router.get('/add', function(request, response, next){
	response.render("addpage")
})


router.get('/:urlTitle', function(request, response, next){
	Page.findOne({
		where: {
			urlTitle: request.params.urlTitle
		}
	})
	.then(function(page){
		response.render('wikipage', {page});
	})
	.catch(next);
})
