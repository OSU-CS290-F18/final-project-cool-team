var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var bodyParse = require('body-parser');
postData = require('./postData');
var port= process.env.PORT || 3000;
var url = "mongodb://sam:6a32Bc91@foto-shard-00-00-cjfic.mongodb.net:27017,foto-shard-00-01-cjfic.mongodb.net:27017,foto-shard-00-02-cjfic.mongodb.net:27017/test?ssl=true&replicaSet=foto-shard-0&authSource=admin&retryWrites=true"
var db;
var photos;
MongoClient.connect(url, function(err, client){
	if(err){
		throw err;
	}
	console.log("mongodb is connected");
	db = client.db('test');
	photos = db.collection('foto');
});
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


/*app.get('/', function(req, res, next) {
	res.status(200).render('home',{
		posts: postData,
    tags: postData[0].tags
	});
});*/

app.get('/', function(req, res, next) {
	 photos.find({}).toArray(function (err, docs) {
		if (err) {
		res.status(500).send("cannot connect to DB.");
		}
    res.status(200).render('home', {
      posts: docs,
	  tags: docs.tags
    });

	});

});

app.get('/:id', function(req, res, next) {
    var id = req.params.id;
    var index = findWithAttr(postData, 'id', id);
    if (postData[id]) {
      res.status(200).render('partials/foto', {
        id: postData[index].id,
        description: postData[index].description,
        imgURL: postData[index].imgURL,
        tags: postData[index].tags,
        comments: postData[index].comments,
        date: postData[index].date
  	  });

    } else if (id == '#popular') {

		} else if (id == '#new') {

		} else if (id == '#old') {

		} else {
			next();
		}
});

app.get('*', function (req, res, next) {
  res.status(404).render('404');
});

app.listen(port, function (err) {
    if(err) {
      throw err;
    }
  console.log("== Server is listening on port", port);
});

function findWithAttr(jsonArray, attr, value) {
  for (var i = 0; i < postData.length; i++) {
    if (postData[i][attr] == value) {
      return i
    }
  }
  return -1;
}
