var express = require('express');
var router = new express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');
module.exports = router;
router.use('/wiki', wikiRouter);
router.use('/user', userRouter);


router.get('/', function(request, response, next){
	response.send('hi');
})